import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  resetFormObs = new Subscription();
  @ViewChild ('authForm') authForm : NgForm;
  isLogIn: boolean = false;
  passwordShow: boolean = false;

  constructor(private route: ActivatedRoute, private authService : AuthService) { }

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
    console.log(this.authForm);
  }

}
