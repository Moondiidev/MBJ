import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerSetUpComponent } from './seller-set-up.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProfessionalInfoComponent } from './professional-info/professional-info.component';

@NgModule({
    declarations: [
        SellerSetUpComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
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
                        path: 'professional', component: ProfessionalInfoComponent
                    }
                ]
            },
        ])
    ],
})
export class SellerModule { }