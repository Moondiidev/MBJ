import { HeadErrorComponent } from './../head-error/head-error.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent,
    HeadErrorComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: ':isLogIn', component: AuthComponent },
    ])
  ],
})
export class AuthModule { }