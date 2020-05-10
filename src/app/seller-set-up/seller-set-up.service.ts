import { PersonalModel } from './../shared/personal.model';
import { ProfessionalModel } from 'src/app/shared/professional.model';
import { Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { SellerModel } from '../shared/seller.model';

@Injectable({
  providedIn: 'root'
})
export class SellerSetUpService implements OnInit {
  navNum = new Subject<number>();
  personalFormValid = new Subject<boolean>();
  professionalModel : ProfessionalModel;
  personalModel : PersonalModel;
  sellerModel;
  constructor() { }
  ngOnInit(){}
  
  personalNav(){
    this.navNum.next(0);
  }
  professionalNav(){
    this.navNum.next(1);
  }
  getPersonalInfo(profileImage, firstName, lastName, description){
    this.personalModel = new PersonalModel(profileImage, firstName, lastName, description);
  }
  getProfessionalInfo(selectedProfession,checkedProfessions,selectedFromYear,selectedToYear,skills,educations,certifications){
    this.professionalModel = new ProfessionalModel(selectedProfession,checkedProfessions,selectedFromYear,selectedToYear,skills,educations,certifications);
  }
  getSellerFormInfo(){
    this.sellerModel = {...this.personalModel, ...this.professionalModel};
  }
}
