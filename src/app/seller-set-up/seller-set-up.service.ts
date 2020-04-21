import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerSetUpService {
  navNum = new Subject<number>();
  constructor() { }

  personalNav(){
    this.navNum.next(0);
  }
  professionalNav(){
    this.navNum.next(1);
  }
}
