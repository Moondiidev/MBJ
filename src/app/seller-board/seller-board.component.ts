import { AppManagerService } from './../shared/app-manager.service';
import { SellerSetUpService } from './../seller-set-up/seller-set-up.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seller-board',
  templateUrl: './seller-board.component.html',
  styleUrls: ['./seller-board.component.scss']
})
export class SellerBoardComponent implements OnInit {
  profileImgUrl: string = null;
  personalProfileImgDataSub: Subscription;
  userNameSub: Subscription;
  userName: string;
  responseRate: number = 40;
  messagePreviews = [
    {profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap'},
    {profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap'},
    {profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap'},
    {profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap'},
    {profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap'},
];
  constructor(private sellerService: SellerSetUpService, private appManagerService: AppManagerService) { }

  ngOnInit(): void {
    this.getProfileImage();
    this.getUserName();
    
  }
  getProfileImage() {
    this.personalProfileImgDataSub = this.sellerService.getProfileImg().subscribe(imgUrl=>{
      this.profileImgUrl = imgUrl;
    })    
  }
  getUserName(){
    this.userNameSub = this.appManagerService.userName.subscribe(name => {
      this.userName = name;
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.personalProfileImgDataSub.unsubscribe();
  }
}
