import { SellerSetUpService } from "./../seller-set-up/seller-set-up.service";
import { Router, NavigationEnd } from "@angular/router";
import { AppManagerService } from "./../shared/app-manager.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentState: string = "main";
  isAuthenticated: boolean = false;
  isSellerMode: boolean = false;
  profileImgUrl: string = "assets/img/profilePlaceholder.svg";
  userName: string;
  logInMode: string;
  nextModeName: string = "Худалдагчийн Горим";
  hasSellerAccount: boolean = false;
  hasSellerAccountSub: Subscription;
  private userNameSub: Subscription;
  private userSub: Subscription;
  private headerStateSub: Subscription;
  private profileImgSub: Subscription;
  private logInStateSub: Subscription;

  constructor(
    private authService: AuthService,
    private appManagerService: AppManagerService,
    private sellerService: SellerSetUpService,
    private router: Router
  ) {}

  ngOnInit() {
    //If user exists, authenticated
    //I listened to only changes below so, current state needs to be set initially like this
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.appManagerService.headerStateSub.next(
          this.appManagerService.headerStates.buyerMain
        );
        this.userNameSub = this.appManagerService.userName.subscribe((name) => {
          this.userName = name;
        });
      } else {
        this.appManagerService.headerStateSub.next(
          this.appManagerService.headerStates.main
        );
      }
    });
    //Whenever url changes, check it and change the headerState
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let url = this.router.url;
        this.profileImgSub = this.sellerService
          .getProfileImg()
          .subscribe((url) => {
            if (url != null || url != undefined) {
              this.profileImgUrl = url;
            }
          });
        if (url === "/main") {
          if (this.isAuthenticated) {
            this.appManagerService.headerStateSub.next(
              this.appManagerService.headerStates.buyerMain
            );
          } else {
            this.appManagerService.headerStateSub.next(
              this.appManagerService.headerStates.main
            );
          }
        } else if (url.includes("/seller-set-up")) {
          this.appManagerService.headerStateSub.next(
            this.appManagerService.headerStates.onlyLogo
          );
        } else if (this.hasSellerAccount) {
          if (url.includes(`/${this.appManagerService.userName}`))
            this.appManagerService.headerStateSub.next(
              this.appManagerService.headerStates.sellerMain
            );
        }
      });

    //Based on the header state, change the header DOM
    this.headerStateSub = this.appManagerService.headerStateSub.subscribe(
      (state) => {
        if (state != null) {
          this.currentState = state;
          alert(this.currentState);
        }
      }
    );

    //See if user has created seller account
    this.hasSellerAccountSub = this.appManagerService
      .fetchHasSellerAccount()
      .subscribe((hasOrNot) => {
        alert(hasOrNot[0]);
        this.hasSellerAccount = hasOrNot[0];
      });
  }
  logout() {
    this.authService.logout();
  }
  switchLogInMode() {
    if (!this.hasSellerAccount) {
      this.router.navigate(["/seller-set-up/personal"]);
    } else {
      if (this.isSellerMode) {
        this.buyerModeActive();
      } else {
        this.sellerModeActive();
      }
    }
  }
  buyerModeActive() {
    this.isSellerMode = false;
    this.appManagerService.headerStateSub.next(
      this.appManagerService.headerStates.buyerMain
    );
    this.nextModeName = "Худалдагчийн Горим";
    this.router.navigate(["/"]);
  }
  sellerModeActive() {
    this.isSellerMode = true;
    this.appManagerService.headerStateSub.next(
      this.appManagerService.headerStates.sellerMain
    );
    this.nextModeName = "Худалдан Авагчийн Горим";
    this.router.navigate([`/seller-board/${this.userName}`]);
  }
  onClick() {
    alert("bruh");
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.headerStateSub.unsubscribe();
    this.profileImgSub.unsubscribe();
    this.userNameSub.unsubscribe();
    this.logInStateSub.unsubscribe();
  }
}
