import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
    declarations: [
      MainComponent
    ],
    imports: [
      FormsModule,
      SlickCarouselModule,
      SharedModule,
      RouterModule.forChild([
        {path: '', component: MainComponent}
      ])   
    ],
  })
export class MainModule{ }