import { Directive, Input, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

    @Input('ratio') parallaxRatio: number = 1
    initialTop: number = 0
  
  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {

    this.eleRef.nativeElement.style.backgroundPositionY = (800 - (window.scrollY * (-0.5))) + 'px';
    // console.log(parseFloat(this.eleRef.nativeElement.style.backgroundPositionY.split('px')[0]), window.scrollY , this.parallaxRatio, (parseFloat(this.eleRef.nativeElement.style.backgroundPositionY.split('px')[0]) - (window.scrollY * this.parallaxRatio)));
    
  }
}
