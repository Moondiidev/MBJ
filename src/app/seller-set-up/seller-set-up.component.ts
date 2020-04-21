import { Component, OnInit, OnDestroy } from '@angular/core';
import { SellerSetUpService } from './seller-set-up.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seller-set-up',
  templateUrl: './seller-set-up.component.html',
  styleUrls: ['./seller-set-up.component.scss']
})
export class SellerSetUpComponent implements OnInit, OnDestroy {
  navNum : number = 0;
  navSub : Subscription;
  constructor(private sellerService : SellerSetUpService) { }
  
  ngOnInit(): void {
    this.navSub = this.sellerService.navNum.subscribe(data =>{
      this.navNum = data;
    });
  }
  ngOnDestroy(){
    this.navSub.unsubscribe();
  }
  
  personalNav(){
    this.sellerService.personalNav();
  }
  professionalNav(){
    this.sellerService.professionalNav();
  }
}
