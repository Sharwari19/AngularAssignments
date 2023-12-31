import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

  constructor(private ele : ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.ele.nativeElement.style.background = 'green';
  }

  
  @HostListener('mouseleave') onmouseleave()
  {
    this.ele.nativeElement.style.background = 'black';
  }
}
