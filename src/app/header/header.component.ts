import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated : boolean = false;
  private userSub: Subscription;
  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
  });
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
