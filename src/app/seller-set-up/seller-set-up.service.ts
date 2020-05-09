import { Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerSetUpService implements OnInit {
  navNum = new Subject<number>();
  personalFormValid = new Subject<boolean>();
  professionalModel;
  constructor() { }
  ngOnInit(){}
  
  personalNav(){
    this.navNum.next(0);
  }
  professionalNav(){
    this.navNum.next(1);
  }
}
