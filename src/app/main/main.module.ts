import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
    declarations: [
      MainComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      SlickCarouselModule,
      RouterModule.forChild([
        {path: '', component: MainComponent}
      ])   
    ],
  })
export class MainModule{ }