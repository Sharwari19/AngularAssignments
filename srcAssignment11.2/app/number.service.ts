import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService
{
  public Result : string = "";
  
  constructor() { }

  public ChkPrime(value : number) : string
  {

    if(value == 1)
    {
      this.Result = "1 is neither Prime nor Composite";
    }

    if(value == 0)
    {
      this.Result = "0 is Not a Prime Number";
    }

    if(value == 2)
    {
      this.Result = "2 is a Prime Number";
    }


    let i = 2;
    while(i < value)  
    {
      if (value % i == 0)
      {
        this.Result = " is Not a Prime Number";
        break;
        
      }
      else 
      {
        this.Result = " is a Prime Number";
      }
      
       i++; 

    }

    return this.Result;

  }
}
