import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform 
{

  transform(inputNumber: number, param: string): any
  {
    let lowerParam = param.toLowerCase();
    let result : string;

    //IF THE PARAM IS PRIME
    if(lowerParam === "prime")
    {
      if (inputNumber == 0)
      {
        result = `The number ${inputNumber} is not a Prime number`;
      }
      else if (inputNumber == 1)
      {
        result = `The number ${inputNumber} is neither a Prime nor Composite`;
      }
      else
      {
        for(let i = 2; i < inputNumber; i++)
        {
          if (inputNumber % i === 0)
          { 
            result = `The number ${inputNumber} is not a Prime number`;  
            break;
          }
        } 

        result = `The number ${inputNumber} is a Prime Number`;

      }

      return result;

    }
    
    
    //IF THE PARAM IS PERFECT
    if(lowerParam === "perfect")
    {
      let sum = 0;
      for(let i = 1; i < inputNumber; i++)
      {
        if(inputNumber % i === 0)
          sum = sum + i;
      }

      if(inputNumber == sum)
      {
        result = `The number ${inputNumber} is a Perfect number`;
      }
      else 
      {
        result = `The number ${inputNumber} is not a Perfect number`;
      }

      return result;
     
    }



    //IF THE PARAM IS EVEN
    if(lowerParam === "even")
    {

      if (inputNumber % 2 == 0)
      {
        result = `The number ${inputNumber} is an Even number`;
      } 
      else 
      {
        result = `The number ${inputNumber} is not an Even number`;
      }
      
      return result;
    }


    //IF THE PARAM IS ODD
    if(lowerParam === "odd")
    {
    
      if (inputNumber % 2 !== 0)
      {
        result = `The number ${inputNumber} is an Odd number`;
      }
      else 
      {
        result = `The number ${inputNumber} is not an Odd number`;
      } 

      return result
    }


  }
}
