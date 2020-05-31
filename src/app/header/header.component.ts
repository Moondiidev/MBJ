import { SellerSetUpService } from './../seller-set-up/seller-set-up.service';
import { Router, NavigationEnd } from '@angular/router';
import { AppManagerService } from './../shared/app-manager.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentState: string = "main";
  isAuthenticated: boolean = false;
  isSellerMode: boolean = false;
  profileImgUrl: string = "../../assets/img/profilePlaceholder.svg";
  userName: string;
  private userNameSub: Subscription;
  private userSub: Subscription;
  private appStateSub: Subscription;
  private profileImgSub: Subscription;
  constructor(private authService: AuthService, private appManagerService: AppManagerService, private sellerService: SellerSetUpService, private router: Router) { }

  ngOnInit() {
    //If user exists, authenticated
    //I listened to only changes below so, current state needs to be set initially like this
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.currentState = 'authenticated';
        this.userNameSub = this.appManagerService.userName.subscribe(name => {
          this.userName = name;
        });
      } else {
        this.currentState = 'main';
      }
    })

    //Whenever url changes, check it and change the headerState
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let url = this.router.url;
        if (this.isAuthenticated) {
          if (url === '/main') {
            this.appManagerService.headerStateSub.next(this.appManagerService.headerStates.authenticated);
          } else if (url.includes('/seller-set-up')) {
            this.appManagerService.headerStateSub.next(this.appManagerService.headerStates.onlyLogo);
          }
        } else if (this.isSellerMode) {
          if (url === '/main') {
            this.profileImgSub = this.sellerService.getProfileImg().subscribe(url => {
              if (url != null || url != undefined) {
                this.profileImgUrl = url;
              }
            })
            this.appManagerService.headerStateSub.next(this.appManagerService.headerStates.sellerMain);
          }
        } else {
          if (url === '/main') {
            this.appManagerService.headerStateSub.next(this.appManagerService.headerStates.main);
          }
        }
      }
      )

    //Based on the header state, change the header DOM
    this.appStateSub = this.appManagerService.headerStateSub.subscribe(state => {
      if (state != null) {
        this.currentState = state;
        alert(this.currentState);
      }
    });
  }
  onClick() {
    alert("bruh");
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.appStateSub.unsubscribe();
    this.profileImgSub.unsubscribe();
    this.userNameSub.unsubscribe();
  }
  logout() {
    this.authService.logout();
  }

}
