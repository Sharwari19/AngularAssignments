import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})

export class NumberService 
{
  public Result : string = "";

  constructor() { }

  public ChkPrime(input : number)
  {
    if(input == 0)
    {
      this.Result = "0 is Not a Prime Number";
    }

    if(input == 1)
    {
      this.Result = "1 is neither a Prime Number nor a Composite Number";
    }

    if(input == 2)
    {
      this.Result = "2 is a Prime Number";
    }

    let i = 0;
    
    for(i = 2; i < input ; i++)
    {
      if(input % i == 0)
      {
        this.Result = "is Not a Prime Number";
        break;
      }
      else
      {
        this.Result = "is a Prime Number";
      }
      
    }

    

    return this.Result;
  }
}
