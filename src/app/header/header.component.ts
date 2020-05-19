import { AppManagerService } from './../shared/app-manager.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentState: string = "main";
  private userSub: Subscription;
  private appState: Subscription;
  constructor(private authService: AuthService, private appManagerService: AppManagerService) { }

  ngOnInit() {

    this.userSub = this.authService.user.subscribe(user => {
      if (user) {
        this.currentState = 'authenticated';
      }else{
        this.currentState = 'main';
      }
      alert(this.currentState);
    })
  }
  onClick() {
    alert("bruh");
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  logOut() {
    this.authService.logout();
  }
  sellerNav() {
    this.appManagerService.appState.next('onlyLogo');
  }
}
