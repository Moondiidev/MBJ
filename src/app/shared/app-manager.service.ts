import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppManagerService {
  constructor(private http: HttpClient) { }

  headerStateSub = new BehaviorSubject<string>(null);
  logInStateSub = new BehaviorSubject<string>(null);
  userName = new BehaviorSubject<string>(null);

  headerStates = {
    main: 'main',
    buyerMain: 'buyerMain',
    sellerMain: 'sellerMain',
    onlyLogo: 'onlyLogo',
  }
  logInStates = {
    visitorMode: 'visitorMode',
    buyerMode: 'buyerMode',
    sellerMode: 'sellerMode'
  }
  switchToVisitorMode(){
    this.logInStateSub.next(this.logInStates.visitorMode);
    this.saveLogInState();
  }
  switchToBuyerMode(){
    this.logInStateSub.next(this.logInStates.buyerMode);
    this.saveLogInState();
  }
  switchToSellerMode(){
    this.logInStateSub.next(this.logInStates.sellerMode);
    this.saveLogInState();
  }
  saveLogInState() {
    this.http.put(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.userName.value}/logInState.json`, this.logInStateSub.value).subscribe(res => { console.log(res); });
  }
}
