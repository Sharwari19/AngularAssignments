import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  public Multiplication : number = 0;

  transform(value1: number, value2 : number): number
  {

    this.Multiplication = value1 * value2;

    return this.Multiplication;
    
  }

}
