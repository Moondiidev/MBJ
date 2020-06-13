import { AppManagerService } from './../shared/app-manager.service';
import { AuthService } from './../auth/auth.service';
import { signupData } from './../auth/signupData.interface';
import { Subscription } from 'rxjs';
import { SellerSetUpService } from './../seller-set-up/seller-set-up.service';
import { ProfessionalModel } from 'src/app/shared/professional.model';
import { PersonalModel } from 'src/app/shared/personal.model';
import { Component, OnInit } from '@angular/core';
import { UserReviewModel } from './userReview.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  reviewChoices: Array<string> = ['Худалдагчийн','Худалдан авагчийн'];
  currentChoice : number = 0;
  userSignupData: signupData = {
    userName: '',
    joinDate: ''
  };
  userLastDeliveryTime: string = '';
  userResponseTime: string = '';
  personalDescription: string = '';
  professionalEducations;
  professionalCertifications;
  professionalSkills: Array<string>;
  personalDataSub: Subscription;
  professionalDataSub: Subscription;
  userNameSub: Subscription;
  privateMode: boolean = true;
  reviews: Array<UserReviewModel> = [{name: 'allah ala tunji',rating: 2, review: 'It was great experience. Great communication. Thank you :)', date: '9 sariin omno'}];
  constructor(private sellerService: SellerSetUpService, private authService: AuthService, private appManagerService: AppManagerService) { }

  ngOnInit(): void {
    this.userNameSub = this.appManagerService.userName.subscribe(name => {
      this.userSignupData.userName = name;
      this.getUserData();
    })
  }
  getUserData() {
    //Get personal data from firebase database
    this.personalDataSub = this.sellerService.fetchPersonalInfo().subscribe((data: PersonalModel) => {
      console.log(data);
      if (data != null) {
        this.personalDescription = data.personalDescription;
      }
    })

    //Get professional data from firebase database
    this.professionalDataSub = this.sellerService.fetchProfessionalInfo().subscribe((data: ProfessionalModel) => {
      console.log(data);
      if (data != null) {
        this.professionalEducations = data.educations;
        this.professionalSkills = data.professionSkills;
        this.professionalCertifications = data.certifications;
      }
    })

    //Get signupData from firebase database
    this.authService.getUserJoinDate(this.userSignupData.userName).subscribe(date => {
      this.userSignupData.joinDate = date;
    })

  }
  ngOnDestroy(): void {
    this.userNameSub.unsubscribe();
  }

  //ngClass uses currentChoice var to decide which el should have active class added. 
  //ngFor allows (click) event to know which elemnt was clicked 
  choiceChange(choiceNum : number){
    this.currentChoice = choiceNum;
  }

}
