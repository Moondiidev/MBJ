import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { LoadingDotsComponent } from './loading-dots/loading-dots.component';

@NgModule({
    declarations: [
      LoadingDotsComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoadingDotsComponent,
        CommonModule     
    ]
})
export class SharedModule{}