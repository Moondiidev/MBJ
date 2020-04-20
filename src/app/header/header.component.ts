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
  currentState : string = "main";
  private userSub: Subscription;
  private appState: Subscription;
  constructor(private authService : AuthService, private appManagerService : AppManagerService) { }

  ngOnInit() {
    this.appState = this.appManagerService.appState.subscribe(state => {
      this.currentState = state;
    })
  }
  onClick(){
    alert("bruh");
  }
  resetForm(){
    this.authService.resetForm.next();
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  logOut(){
    this.authService.logout();
  }
}
