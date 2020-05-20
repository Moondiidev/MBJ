import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SellerSetUpComponent } from './seller-set-up.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from "angularfire2/storage";

@NgModule({
    declarations: [
        SellerSetUpComponent
    ],
    imports: [
        AngularFireModule.initializeApp({
            apiKey: "AIzaSyA5Y-a9JJesQov7UMNrlBHFDN5wfaA9ANw",
            authDomain: "mbj-2f9fa.firebaseapp.com",
            projectId: "mbj-2f9fa",
            storageBucket: "mbj-2f9fa.appspot.com",
        }),
        AngularFireStorageModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: ':nav', component: SellerSetUpComponent
            }
        ])
    ],
})
export class SellerModule { }