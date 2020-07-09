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
  userName = new BehaviorSubject<string>(null);

  headerStates = {
    main: 'main',
    buyerMain: 'buyerMain',
    sellerMain: 'sellerMain',
    onlyLogo: 'onlyLogo',
  }
  
  saveHasSellerAccount(createdOrNot: boolean) {
    const temp = {hasSellerAccount: createdOrNot};
    this.http.put(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.userName.value}`, temp).subscribe(res => { console.log(res); });
  }
  fetchHasSellerAccount() {
    return this.http.get(`${environment.cors}${environment.databaseURL}sellerAccounts/${this.userName.value}/hasSellerAccount.json`);
  }
}
