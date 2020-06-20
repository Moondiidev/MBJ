import { signupData } from './signupData.interface';
import { HeaderErrorService } from './../head-error/header-error.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm: FormGroup;
  error: string = null;
  isLoading: boolean = false;
  isLogIn: boolean = false;
  passwordShow: boolean = false;
  checkingUserName: boolean = false;
  signupData: signupData = {
    userName: '',
    joinDate: '',
    email: '',
    password: ''
  };
  errorMode: string;
  uniqueUserTimeout;
  userNameSub: Subscription;
  emailAndPasswordSub: Subscription;
  accessDeniedError: boolean = true;
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router, private headerErrorService: HeaderErrorService) { }

  ngOnInit(): void {
    //See if user came from access denied error
    this.accessDeniedError = !!this.route.snapshot.queryParamMap.get('access');
    if (this.accessDeniedError) {
      this.headerErrorService.headerErrorMsg.next('Энэ хуудас луу орохын тулд та нэвтэрсэн байх шаардлагатай.');
    }

    //Decide whether form should be signUp or logIn
    this.route.params.subscribe((params: Params) => {
      this.isLogIn = 'logIn' === params['isLogIn'] ? true : false;
      this.error = null;
      if (this.isLogIn) {
        this.authForm = new FormGroup({
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'password': new FormControl(null, Validators.required),
        });
      } else {
        this.authForm = new FormGroup({
          'userName': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern('^[A-Za-z]+(?:[_A-Za-z0-9])*$')], this.uniqueUserName.bind(this)),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
        });
      }
    })
    
    this.emailAndPasswordSub = this.authService.getEmailAndPass().subscribe(data => {
      this.authService.currentUserEmail = data.email;
      this.authService.currentUserPass = data.password;
    })
  }
  uniqueUserName(control: FormControl): Promise<any> | Observable<any> {
    clearTimeout(this.uniqueUserTimeout);
    let allUsedUserNames: Array<string>;
    const promise = new Promise<any>((resolve, reject) => {
      //Time delay allows some time after user stops typing in order to check the validation. Otherwise,
      // validation gets run many times whenever new char is typed or deleted
      this.uniqueUserTimeout = setTimeout(() => {
        this.checkingUserName = true;
        //Get all used user names stored on database
        this.userNameSub = this.authService.getUserNames().subscribe(names => {
          allUsedUserNames = names;
          console.log(allUsedUserNames);
          if (allUsedUserNames !== null) {
            for (let i = 0; i < allUsedUserNames.length; i++) {
              if (allUsedUserNames[i].toLowerCase() === this.authForm.get('userName').value.toLowerCase()) {
                resolve({ 'isNotUniqueUserName': true });
                this.checkingUserName = false;
                break;
              }
            }
            resolve(null);
            this.checkingUserName = false;
          } else {
            resolve(null);
            this.checkingUserName = false;
          }
        });
      }, 700)
    })
    return promise;
  }
  // validateUserName(control: FormControl): {[s:string] : boolean} {
  //   let name: string = this.authForm.get('userName').value;
  //   if(name[0].)
  //   // if (/\s/.test(this.authForm.get('userName').value)) {
  //   //   // It has any kind of whitespace
  //   //   return {'unwantedCharacters':true};
  //   // }
  // }
  togglePasswordVisibility() {
    this.passwordShow = !this.passwordShow;
  }
  rememberMeToggle() {
    this.authService.rememberToggle = !this.authService.rememberToggle;
  }
  ngOnDestroy() {
    this.emailAndPasswordSub.unsubscribe();
    if (this.userNameSub !== undefined) {
      this.userNameSub.unsubscribe();
    }
    //Removes error if it was present
    if (this.accessDeniedError) {
      this.headerErrorService.headerErrorMsg.next(null);
    }
  }
  onSubmit() {
    //If not valid, exit
    if (!this.authForm.valid) {
      return;
    }
    //Save all data to firebase database
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    if (!this.isLogIn) {
      this.signupData.userName = this.authForm.get('userName').value;
      const today = new Date();
      this.signupData.joinDate = `${today.getFullYear()} ${today.getMonth() + 1}-р сар`;
      this.signupData.email = email;
      this.signupData.password = password;
    }
    //Start loading
    this.isLoading = true;

    //Login or signup using firebase authentication
    let authObs: Observable<AuthResponseData>;

    if (this.isLogIn) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(this.signupData.userName, email, password);
    }
    authObs.subscribe(
      resData => {
        //On Valid authentication, if it is signup form, save username to database 
        if (!this.isLogIn) {
          console.log(this.signupData);
          this.authService.saveSignupData(this.signupData);
        }
        console.log(resData);
        this.authService.setUserName(resData.displayName);
        this.authForm.reset();
        this.isLoading = false;
        this.router.navigate(['']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.authForm.reset();
        this.isLoading = false;
      }
    );
  }
}
