import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  @Input() backgroundColor: string = '';

  constructor(private element: ElementRef) { 
    
  }

  set backgorundColor(color: string) {
    this.element.nativeElement.style.backgroundColor =color;
  }

}
