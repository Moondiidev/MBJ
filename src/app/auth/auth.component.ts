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
  currentUserName : string;
  userNameSub: Subscription;
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
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
          'userName': new FormControl(null, [Validators.required, Validators.minLength(6)], this.uniqueUserName.bind(this)),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
        });
      }
    })
  }
  uniqueUserName(control: FormControl): Promise<any> | Observable<any> {
    let allUsedUserNames: Array<string>;
    const promise = new Promise<any>((resolve, reject) => {
      this.checkingUserName = true;
      //Get all used user names stored on database
      this.userNameSub = this.authService.getUserNames().subscribe(names => {
        allUsedUserNames = names;
        console.log(allUsedUserNames);
        if (allUsedUserNames !== null) {
          for (let i = 0; i < allUsedUserNames.length; i++) {
            if (allUsedUserNames[i] === this.authForm.get('userName').value) {
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
    })
    return promise;
  }
  togglePasswordVisibility() {
    this.passwordShow = !this.passwordShow;
  }
  rememberMeToggle() {
    this.authService.rememberToggle = !this.authService.rememberToggle;
  }
  ngOnDestroy() {
    if (this.userNameSub !== undefined) {
      this.userNameSub.unsubscribe();
    }
  }
  onSubmit() {
    if (!this.authForm.valid) {
      return;
    }
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    if (!this.isLogIn) {
      this.currentUserName = this.authForm.get('userName').value;
    }
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLogIn) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(this.currentUserName,email, password);
    }
    authObs.subscribe(
      resData => {
        //On Valid authentication, if it is signup form, save username to database 
        if (!this.isLogIn) {
          this.authService.saveUserName(this.currentUserName);
        }
        console.log(resData);
        console.log(resData.displayName);
        this.authService.setUserName(resData.displayName);
        this.isLoading = false;
        this.router.navigate(['']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    this.authForm.reset();
  }

}
