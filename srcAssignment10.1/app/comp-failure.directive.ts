import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective 
{

  constructor(private ele : ElementRef) 
  { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.ele.nativeElement.style.background = 'red';
  }


  @HostListener('mouseleave') onmouseleave()
  {
    this.ele.nativeElement.style.background = 'black';
  }
}
