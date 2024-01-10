import { Injectable } from '@angular/core';

@Injectable(
    {
      providedIn : 'root'
    }
 
)
export class StringService 
{
  
  public count : number = 0;
  
  constructor() { }

  public CountCapital(sentence : string)
  {
    let i = 0;

    for(i = 0; i < sentence.length; i++)
    {
      
      let char = sentence[i];

      if('A' <= char && char <= 'Z')
      {
        this.count++;
      }
    
    }

    return this.count;
  }
}
