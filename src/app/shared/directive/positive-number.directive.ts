import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPositiveNumber]',
})
export class PositiveNumberDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initialValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initialValue.replace(/[^0-9]/g, '');
    if (this.el.nativeElement.value !== initialValue) {
      event.stopPropagation(); 
    }
  }
}
