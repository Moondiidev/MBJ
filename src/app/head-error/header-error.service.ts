import {BehaviorSubject } from 'rxjs';

import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class HeaderErrorService {
    headerErrorMsg = new BehaviorSubject<string>(null);
}