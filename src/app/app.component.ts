import { Subscription } from 'rxjs';
import { AppManagerService } from './shared/app-manager.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  emailAndPasswordSub: Subscription;

  constructor(private authService: AuthService, private appManagerService: AppManagerService) { }
  ngOnInit(): void {
    //Get username
    this.appManagerService.userName.next(localStorage.getItem('userName'));
    console.log(this.appManagerService.userName);
    //This component loads first so do auto login here
    this.authService.rememberer();
    if (this.authService.rememberUser) {
      this.authService.autoLogin();
    }

    this.emailAndPasswordSub = this.authService.getEmailAndPass().subscribe(data => {
      console.log(data);
      this.authService.currentUserEmail = data.email;
      this.authService.currentUserPass = data.password;
      alert(this.authService.currentUserEmail);
      alert(this.authService.currentUserEmail);
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.emailAndPasswordSub.unsubscribe();
  }
}
