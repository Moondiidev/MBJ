import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { LoadingDotsComponent } from './loading-dots/loading-dots.component';

@NgModule({
    declarations: [
      LoadingDotsComponent,
      DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoadingDotsComponent,
        CommonModule,
        DropdownDirective 
    ]
})
export class SharedModule{}