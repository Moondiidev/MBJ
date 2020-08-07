import { SharedModule } from './../shared/shared.module';
import { GigCreationComponent } from './gig-creation.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        GigCreationComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: GigCreationComponent }
        ])
    ],
})
export class GigCreationModule { }