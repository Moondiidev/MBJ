import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SellerSetUpService } from './seller-set-up.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-set-up',
  templateUrl: './seller-set-up.component.html',
  styleUrls: ['./seller-set-up.component.scss']
})
export class SellerSetUpComponent implements OnInit, OnDestroy {
  navNum : number = 0;
  navSub : Subscription;
  personalFormValid : boolean = false;
  personalFormValidSub : Subscription;
  constructor(private sellerService : SellerSetUpService, private router : Router) { }
  
  ngOnInit(): void {
    this.navSub = this.sellerService.navNum.subscribe(data =>{
      this.navNum = data;
    });

    // When user refreshes on navigation other than personal, navigation will be in the correct state
    switch (this.router.url) {
      case '/seller-set-up/personal':
        this.navNum = 0;
        break;
      case '/seller-set-up/professional':
        this.navNum = 1;
        break;
      default:
        this.navNum = 0;
        break;
    }

    this.personalFormValidSub = this.sellerService.personalFormValid.subscribe(validity =>{
      this.personalFormValid = validity;
    })
  }
  ngOnDestroy(){
    this.navSub.unsubscribe();
    this.personalFormValidSub.unsubscribe();
  }

  personalNav(){
    this.sellerService.personalNav();
  }
  professionalNav(){
    this.sellerService.professionalNav();
  }
}
