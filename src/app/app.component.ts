import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    //This component loads first so do auto login here
    this.authService.rememberer();
    if (this.authService.rememberUser) {
      this.authService.autoLogin();
    }
  }

}
