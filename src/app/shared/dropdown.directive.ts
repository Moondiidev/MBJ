import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropDown]',
})
export class DropdownDirective {
    bouncer;
    constructor(private eRef: ElementRef) { };
    @HostBinding('class.ddOpen') isOpen = false;
    @HostListener('document:click', ['$event']) toggleClick(event) {
        if (this.eRef.nativeElement.contains(event.target)) {
            this.isOpen = !this.isOpen;
            // This allows cross element (click) = "anotherEl.click()" functionality.
            this.bouncer = setTimeout(()=>this.bouncer = null,100);
        }else if(this.bouncer === null){
            this.isOpen = false;
        }
    }
}