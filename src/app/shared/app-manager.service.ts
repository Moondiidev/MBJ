import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppManagerService {
  headerStateSub = new BehaviorSubject<string>(null);
  headerStates = {
    main: 'main',
    authenticated: 'authenticated',
    sellerMain: 'sellerMain',
    onlyLogo: 'onlyLogo',
  }
  userName = new BehaviorSubject<string>(null);
  constructor() { }
}
