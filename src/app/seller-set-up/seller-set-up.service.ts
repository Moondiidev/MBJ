import { AppManagerService } from './../shared/app-manager.service';
import { HttpClient } from '@angular/common/http';
import { PersonalModel } from './../shared/personal.model';
import { ProfessionalModel } from 'src/app/shared/professional.model';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireStorage } from 'angularfire2/storage';
import { ValidityModel } from '../shared/validity.model';

@Injectable({
  providedIn: 'root'
})
export class SellerSetUpService {
  personalFormValid = new Subject<boolean>();
  isPersonalFormValid: boolean;
  professionalModel: ProfessionalModel;
  personalModel: PersonalModel;
  savedPersonalInfo = new Subject<boolean>();
  validityInfo: ValidityModel;
  folderName: string = 'profileImages';

  constructor(private http: HttpClient, private appManagerService: AppManagerService, private afStorage: AngularFireStorage) { }

  saveValidityInfo(personalFormValid: boolean) {
    this.validityInfo = new ValidityModel({ personalFormValid: personalFormValid});
    this.http.put(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.appManagerService.userName.value}/validityInfo.json`, this.validityInfo).subscribe(res => { console.log(res); });
  }
  fetchValidityInfo() {
    return this.http.get<ValidityModel>(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.appManagerService.userName.value}/validityInfo.json`)
  }
  savePersonalInfo(firstName: string, lastName: string, description: string, btn?: boolean) {
    this.personalModel = new PersonalModel(firstName, lastName, description);
    this.http.put(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.appManagerService.userName.value}/personalInfo.json`, this.personalModel).subscribe(res => {
      console.log(res);
      if (btn) {
        this.savedPersonalInfo.next(true);
      };
    })
  }
  fetchPersonalInfo() {
    return this.http.get<PersonalModel>(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.appManagerService.userName.value}/personalInfo.json`);
  }
  saveProfessionalInfo(selectedProfession: string, checkedProfessions, selectedFromYear: number, selectedToYear: number, skills, educations, certifications) {
    this.professionalModel = new ProfessionalModel(selectedProfession, checkedProfessions, selectedFromYear, selectedToYear, skills, educations, certifications);
    this.http.put(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.appManagerService.userName.value}/professionalInfo.json`, this.professionalModel).subscribe(res => { console.log(res); });
  }
  fetchProfessionalInfo() {
    return this.http.get<ProfessionalModel>(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.appManagerService.userName.value}/professionalInfo.json`);
  }

  getProfileImg() {
    //Get profile image and show it
    //Check if file exists and only get it if it does.
    return this.afStorage.ref(`${this.folderName}/${this.appManagerService.userName.value}`).getDownloadURL().pipe(
      catchError(() => {
        return throwError('profile image was not retrieved from firebase storage');
      })
    );
  }
}
