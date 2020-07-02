import { FooterComponent } from './../footer/footer.component';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { LoadingDotsComponent } from './loading-dots/loading-dots.component';

@NgModule({
    declarations: [
      LoadingDotsComponent,
      DropdownDirective,
      FooterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoadingDotsComponent,
        FooterComponent,
        CommonModule,
        DropdownDirective
    ]
})
export class SharedModule{}