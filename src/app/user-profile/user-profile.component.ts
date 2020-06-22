import { SellerSetUpService } from './../seller-set-up/seller-set-up.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AppManagerService } from './../shared/app-manager.service';
import { AuthService } from './../auth/auth.service';
import { signupData } from './../auth/signupData.interface';
import { Subscription } from 'rxjs';
import { ProfessionalModel } from 'src/app/shared/professional.model';
import { PersonalModel } from 'src/app/shared/personal.model';
import { Component, OnInit } from '@angular/core';
import { UserReviewModel } from './userReview.model';
import { educationsInterface } from '../seller-set-up/educations.interface';
import { certificationsInterface } from '../seller-set-up/certifications.interface';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  reviewChoices: Array<string> = ['Худалдагчийн', 'Худалдан авагчийн'];
  currentChoice: number = 0;
  userSignupData: signupData = {
    userName: '',
    joinDate: '',
    email: '',
    password: '',
  };
  userLastDeliveryTime: string = '';
  userResponseTime: string = '';
  professionalEducations: educationsInterface =
    {
      data: [],
      sorter: []
    };
  professionalCertifications: certificationsInterface = {
    data: [],
    sorter: []
  };
  professionalSkills;
  personalDataSub: Subscription;
  professionalDataSub: Subscription;
  userNameSub: Subscription;
  privateMode: boolean = true;
  editableInputValue : Array<string> = ["Би бол МБЖ-ийн гишүүн",""];
  editableInputForm: Array<FormGroup> = [];
  editingInput: Array<boolean> = [false,false];
  addingInput: Array<boolean> = [false,false,false];
  reviews: Array<UserReviewModel> = [{ name: 'allah ala tunji', rating: 2, review: 'It was great experience. Great communication. Thank you :)', date: '9 sariin omno' }];
  constructor(private sellerService: SellerSetUpService, private authService: AuthService, private appManagerService: AppManagerService) { }

  ngOnInit(): void {
    this.userNameSub = this.appManagerService.userName.subscribe(name => {
      this.userSignupData.userName = name;
      this.getUserData();
    });
    this.editableInputForm[0] = new FormGroup({
      'inputValue': new FormControl(null)
    })
    this.editableInputForm[1] = new FormGroup({
      'inputValue': new FormControl(null)
    })
  }
  getUserData() {
    //Get personal data from firebase database
    this.personalDataSub = this.sellerService.fetchPersonalInfo().subscribe((data: PersonalModel) => {
      console.log(data);
      if (data != null) {
        this.editableInputValue[1] = data.personalDescription;
      }
    })

    //Get professional data from firebase database
    this.professionalDataSub = this.sellerService.fetchProfessionalInfo().subscribe((data: ProfessionalModel) => {
      console.log(data);
      if (data != null) {
        if(data.professionSkills != null){
          this.professionalSkills = data.professionSkills;
        }
        if(data.certifications != null){
          this.professionalCertifications.data = data.certifications.data;
        }
        if(data.educations != null){
          this.professionalEducations.data = data.educations.data;
        }
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
  choiceChange(choiceNum: number) {
    this.currentChoice = choiceNum;
  }

  onEditInput(i: number) {
    console.log(this.editableInputForm[i].get('inputValue'));
    this.editableInputForm[i].get('inputValue').setValue(this.editableInputValue[i]);
    this.editingInput[i] = true;
  }
  onCancelEditingInput(i: number) {
    this.editingInput[i] = false;
  }
  onUpdateInput(i: number) {
    this.editingInput[i] = false;
    this.editableInputValue[i] = this.editableInputForm[i].get('inputValue').value;
  }
}
