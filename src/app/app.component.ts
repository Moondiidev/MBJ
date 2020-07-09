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
  savedUserName: string;
  constructor(private authService: AuthService, private appManagerService: AppManagerService) { }
  ngOnInit(): void {
    //Get username
    this.savedUserName = localStorage.getItem('userName');
    this.appManagerService.userName.next(this.savedUserName);
    console.log(this.appManagerService.userName);

    //Gets email and password of the user
    this.emailAndPasswordSub = this.authService.getEmailAndPass(this.savedUserName).subscribe(data => {
      console.log(data);
      this.authService.currentUserEmail = data.email;
      this.authService.currentUserPass = data.password;
    })

    //This component loads first so do auto login here
    this.authService.rememberer();
    if (this.authService.rememberUser) {
      this.authService.autoLogin();
    }

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.emailAndPasswordSub.unsubscribe();
  }
}
