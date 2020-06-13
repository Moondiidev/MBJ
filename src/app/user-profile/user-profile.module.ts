import { UserProfileComponent } from './user-profile.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
    declarations: [
        UserProfileComponent
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: ':userName', component: UserProfileComponent, canActivate: [AuthGuard]
            }
        ])
    ],
})
export class UserProfileModule { }