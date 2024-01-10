import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService 
{

  public addResult : number = 0;
  public subResult : number = 0;

  constructor() { }

  public Add(value1 : number, value2 : number ) : number 
  {
    this.addResult = value1 + value2;
    return this.addResult;
  }

  

  public Sub(value1 : number, value2 : number) : number
  {
    if(value1 > value2)
    {
      this.subResult = value1 - value2;
    }
    else 
    {
      this.subResult = value2 - value1;
    }

    return this.subResult;
  }

}
