import { HttpClient } from '@angular/common/http';
import { PersonalModel } from './../shared/personal.model';
import { ProfessionalModel } from 'src/app/shared/professional.model';
import { Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerSetUpService implements OnInit {
  navNum = new Subject<number>();
  personalFormValid = new Subject<boolean>();
  professionalModel : ProfessionalModel;
  personalModel : PersonalModel;
  sellerModel;
  constructor(private http: HttpClient) { }
  ngOnInit(){}
  
  personalNav(){
    this.navNum.next(0);
  }
  professionalNav(){
    this.navNum.next(1);
  }
  savePersonalInfo(profileImage, firstName, lastName, description){
    this.personalModel = new PersonalModel(profileImage, firstName, lastName, description);
  }
  saveProfessionalInfo(selectedProfession,checkedProfessions,selectedFromYear,selectedToYear,skills,educations,certifications){
    this.professionalModel = new ProfessionalModel(selectedProfession,checkedProfessions,selectedFromYear,selectedToYear,skills,educations,certifications);
    this.http.put('https://cors-anywhere.herokuapp.com/https://mbj-2f9fa.firebaseio.com/professionalInfo.json',this.professionalModel).subscribe(res=>{console.log(res);});
  }
  fetchProfessionalInfo(){
    return this.http.get<ProfessionalModel>('https://cors-anywhere.herokuapp.com/https://mbj-2f9fa.firebaseio.com/professionalInfo.json');
  }
  saveSellerFormInfo(){
    this.sellerModel = {...this.personalModel, ...this.professionalModel};
  }
}
