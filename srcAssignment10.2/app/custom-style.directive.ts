import { Directive } from '@angular/core';
import { ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective 
{

  constructor(private element : ElementRef) 
  { 
    this.element.nativeElement.style.background = 'yellow';

    this.element.nativeElement.style.fontWeight = 'bold';

    this.element.nativeElement.style.textAlign = 'center';
  }
  
  

}
