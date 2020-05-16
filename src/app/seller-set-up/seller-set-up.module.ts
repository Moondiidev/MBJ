import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerSetUpComponent } from './seller-set-up.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProfessionalInfoComponent } from './professional-info/professional-info.component';
import { ProfessionalResolverService } from './professional-info/professional-resolver.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from "angularfire2/storage";
import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule({
    declarations: [
        SellerSetUpComponent,
        PersonalInfoComponent,
        ProfessionalInfoComponent,
        DropdownDirective
    ],
    imports: [
        AngularFireModule.initializeApp({
            apiKey: "AIzaSyA5Y-a9JJesQov7UMNrlBHFDN5wfaA9ANw",
            authDomain: "mbj-2f9fa.firebaseapp.com",
            projectId: "mbj-2f9fa",
            storageBucket: "mbj-2f9fa.appspot.com",
        }),
        AngularFireStorageModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '', component: SellerSetUpComponent,
                children: [
                    {
                        path: '', redirectTo: 'personal'
                    },
                    {
                        path: 'personal', component: PersonalInfoComponent
                    },
                    {
                        path: 'professional', resolve:[ProfessionalResolverService], component: ProfessionalInfoComponent
                    }
                ]
            },
        ])
    ],
})
export class SellerModule { }