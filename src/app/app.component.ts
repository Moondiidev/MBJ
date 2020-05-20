import { Router } from '@angular/router';
import { AppManagerService } from './shared/app-manager.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService, private appManagerService: AppManagerService,private router: Router){}
  ngOnInit(): void {
    //This compnent exists everywhere so change appstate based on route url here
    console.log(this.router.url);
    switch(this.router.url){
      case('/'):
      this.appManagerService.headerStateSub.next('main');
      default:
      this.appManagerService.headerStateSub.next('main');
    }

    //This component loads first so do auto login here
    this.authService.rememberer();
    if(this.authService.rememberUser){
      this.authService.autoLogin();
    }
  }

}
