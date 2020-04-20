import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppManagerService {
  appState = new BehaviorSubject<string>(null);
  constructor() { }
}
