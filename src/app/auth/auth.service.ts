import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  resetForm = new Subject();
  constructor() { }

}
