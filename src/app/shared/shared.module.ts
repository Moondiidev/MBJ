import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { LoadingDotsComponent } from './loading-dots/loading-dots.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
    declarations: [
      DropdownDirective,
      LoadingDotsComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DropdownDirective,
        LoadingDotsComponent,
        CommonModule     
    ]
})
export class SharedModule{}