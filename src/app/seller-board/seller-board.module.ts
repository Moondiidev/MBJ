import { SellerBoardComponent } from './seller-board.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        SellerBoardComponent
    ],
    imports: [
      FormsModule,
      SharedModule,
      RouterModule.forChild([
        {path: ':userName', component: SellerBoardComponent}
      ])   
    ],
  })
export class SellerBoardModule{ }