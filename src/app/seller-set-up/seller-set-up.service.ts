import { AppManagerService } from './../shared/app-manager.service';
import { HttpClient } from '@angular/common/http';
import { PersonalModel } from './../shared/personal.model';
import { ProfessionalModel } from 'src/app/shared/professional.model';
import { Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerSetUpService implements OnInit {
  personalFormValid = new Subject<boolean>();
  professionalModel : ProfessionalModel;
  personalModel : PersonalModel;
  sellerModel;
  constructor(private http: HttpClient, private appManagerService: AppManagerService) { }
  ngOnInit(){}
  

  savePersonalInfo(firstName, lastName, description){
    this.personalModel = new PersonalModel(firstName, lastName, description);
    this.http.put(`${environment.cors}${environment.databaseURL}${this.appManagerService.userName}/personalInfo.json`,this.personalModel).subscribe(res=>{console.log(res);});
  }
  fetchPersonalInfo(){
    return this.http.get<PersonalModel>(`${environment.cors}${environment.databaseURL}${this.appManagerService.userName}/personalInfo.json`);
  }
  saveProfessionalInfo(selectedProfession,checkedProfessions,selectedFromYear,selectedToYear,skills,educations,certifications){
    this.professionalModel = new ProfessionalModel(selectedProfession,checkedProfessions,selectedFromYear,selectedToYear,skills,educations,certifications);
    this.http.put(`${environment.cors}${environment.databaseURL}${this.appManagerService.userName}/professionalInfo.json`,this.professionalModel).subscribe(res=>{console.log(res);});
  }
  fetchProfessionalInfo(){
    return this.http.get<ProfessionalModel>(`${environment.cors}${environment.databaseURL}${this.appManagerService.userName}/professionalInfo.json`);
  }
  saveSellerFormInfo(){
    this.sellerModel = {...this.personalModel, ...this.professionalModel};
  }
}
