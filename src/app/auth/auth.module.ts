import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      AuthComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild([
        {path: ':isLogIn', component: AuthComponent},
      ])       
    ],
  })
  export class AuthModule { }