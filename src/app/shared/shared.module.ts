import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
    declarations: [
      DropdownDirective,
      LoadingSpinnerComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DropdownDirective,
        LoadingSpinnerComponent,
        CommonModule     
    ]
})
export class SharedModule{}