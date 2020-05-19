import { AppManagerService } from './shared/app-manager.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService, private appManagerService: AppManagerService){}
  ngOnInit(): void {
    this.authService.rememberer();
    if(this.authService.rememberUser){
      this.authService.autoLogin();
    }
  }

}
