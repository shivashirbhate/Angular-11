import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAccordion]'
})
export class AccordionDirective {
    element;
    constructor(private eleRef: ElementRef) {
        this.element = this.eleRef.nativeElement;
    }
    // @HostListener('click') onClick(){
        
    //     console.log("marzi"+this.element.nativeElement);
    // }
    @HostListener("click", ["$event"])
    onclick() {        
        if(!this.eleRef.nativeElement.className.includes('active-accordian')) {
            this.eleRef.nativeElement.className += " active-accordian";
            this.eleRef.nativeElement.nextSibling.style.maxHeight = this.eleRef.nativeElement.nextSibling.scrollHeight + 'px';
        } else {
            this.eleRef.nativeElement.className = this.eleRef.nativeElement.className.replace(/\b active-accordian\b/g, "");
            this.eleRef.nativeElement.nextSibling.style.maxHeight = 0;

        }
    }

}
