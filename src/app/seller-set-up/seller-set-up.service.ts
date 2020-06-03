import { AppManagerService } from './../shared/app-manager.service';
import { HttpClient } from '@angular/common/http';
import { PersonalModel } from './../shared/personal.model';
import { ProfessionalModel } from 'src/app/shared/professional.model';
import { Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class SellerSetUpService implements OnInit {
  personalFormValid = new Subject<boolean>();
  professionalModel: ProfessionalModel;
  personalModel: PersonalModel;
  savedPersonalInfo = new Subject<boolean>();
  sellerModel;
  folderName: string = 'profileImages';

  constructor(private http: HttpClient, private appManagerService: AppManagerService, private afStorage: AngularFireStorage) { }
  ngOnInit() { }


  savePersonalInfo(firstName: string, lastName: string, description: string, btn?: boolean) {
    this.personalModel = new PersonalModel(firstName, lastName, description);
    this.http.put(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.appManagerService.userName}/personalInfo.json`, this.personalModel).subscribe(res => {
      console.log(res);
      if (btn) {
        this.savedPersonalInfo.next(true);
      };
    })
  }
  fetchPersonalInfo() {
    return this.http.get<PersonalModel>(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.appManagerService.userName}/personalInfo.json`);
  }
  saveProfessionalInfo(selectedProfession: string, checkedProfessions: Array<string>, selectedFromYear: number, selectedToYear: number, skills, educations, certifications) {
    this.professionalModel = new ProfessionalModel(selectedProfession, checkedProfessions, selectedFromYear, selectedToYear, skills, educations, certifications);
    this.http.put(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.appManagerService.userName}/professionalInfo.json`, this.professionalModel).subscribe(res => { console.log(res); });
  }
  fetchProfessionalInfo() {
    return this.http.get<ProfessionalModel>(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.appManagerService.userName}/professionalInfo.json`);
  }
  saveSellerFormInfo() {
    this.sellerModel = { ...this.personalModel, ...this.professionalModel };
  }
  getProfileImg() {
    //Get profile image and show it
    //Check if file exists and only get it if it does.
    return this.afStorage.ref(`${this.folderName}/${this.appManagerService.userName}`).getDownloadURL();
  }
}
