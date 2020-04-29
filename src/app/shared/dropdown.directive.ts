import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropDown]',
})
export class DropdownDirective {
    constructor(private eRef: ElementRef) { };
    @HostBinding('class.ddOpen') isOpen = false;
    @HostListener('document:click', ['$event']) toggleClick(event) {
        if (this.eRef.nativeElement.contains(event.target)) {
            this.isOpen = !this.isOpen;
        }else{
            this.isOpen = false;
        }
    }
}