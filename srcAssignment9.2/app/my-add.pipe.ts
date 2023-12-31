import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  
  public Addition : number = 0;

  transform(value1: number, value2: number) : number
  {
    this.Addition = value1 + value2;

    return this.Addition;

  }
}
