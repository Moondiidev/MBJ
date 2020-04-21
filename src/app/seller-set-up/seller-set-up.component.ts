import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-set-up',
  templateUrl: './seller-set-up.component.html',
  styleUrls: ['./seller-set-up.component.scss']
})
export class SellerSetUpComponent implements OnInit {
  navNum : number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  // MAKE navNum SUBJECT INSIDE SERVICE TO USE THESE FOR CONTINUE BUTTON 
  personalNav(){
    this.navNum = 0;
  }
  professionalNav(){
    this.navNum = 1;
  }
}
