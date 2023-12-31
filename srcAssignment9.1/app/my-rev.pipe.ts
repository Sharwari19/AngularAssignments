import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  public i : number  = 0;
  public reversedString : string = "";

  transform(value: string) : string
  {
    for(this.i = value.length - 1; this.i >= 0; this.i--)
    {
      this.reversedString = this.reversedString + value[this.i];
      
    }
    
    return this.reversedString;
   
  }

}
