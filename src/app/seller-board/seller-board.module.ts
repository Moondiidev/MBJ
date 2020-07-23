import { SellerBoardComponent } from './seller-board.component';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        SellerBoardComponent
    ],
    imports: [
      FormsModule,
      SharedModule,
      ChartsModule,
      RouterModule.forChild([
        {path: ':userName', component: SellerBoardComponent}
      ])   
    ],
  })
export class SellerBoardModule{ }