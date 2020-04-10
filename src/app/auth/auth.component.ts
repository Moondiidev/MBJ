import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import {Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  resetFormObs = new Subscription();
  @ViewChild ('authForm') authForm : NgForm;
  error: string = null;
  isLoading: boolean = false;
  isLogIn: boolean = false;
  passwordShow: boolean = false;

  constructor(private route: ActivatedRoute, private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      this.isLogIn = 'logIn' === params['isLogIn'] ? true : false;
    })
    this.resetFormObs = this.authService.resetForm.subscribe(()=>{
      this.authForm.reset();
    })
  }
  togglePasswordVisibility(){
    this.passwordShow = !this.passwordShow;
  }
  resetForm(){
    this.authService.resetForm.next();
  }
  ngOnDestroy(){
    this.resetFormObs.unsubscribe();
  }
  onSubmit(){
    if (!this.authForm.valid) {
      return;
    }
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;
    let authObs: Observable<AuthResponseData>;
    
    this.isLoading = true;
    if (this.isLogIn) {
      authObs = this.authService.login(email,password);
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    this.authForm.reset();  }

}
