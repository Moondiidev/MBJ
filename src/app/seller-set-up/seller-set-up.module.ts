import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SellerSetUpComponent } from './seller-set-up.component';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
    declarations: [
        SellerSetUpComponent
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: ':nav', component: SellerSetUpComponent, canActivate: [AuthGuard]
            }
        ])
    ],
})
export class SellerModule { }