import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttrDirective]'
})
export class AttrDirectiveDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = "Red";
   }
   @HostListener("mouseenter") mouseEnter() {
    this.el.nativeElement.style.color = "Blue";
   }
   @HostListener("mouseleave") mouseLeave() {
    this.el.nativeElement.style.color = "Yellow";
   }
   changeColor(colr: any) {
    this.el.nativeElement.style.color = colr; 
   }
}
