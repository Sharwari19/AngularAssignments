import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
  public count : number = 0;
  public char : any;
  public charToNum : number = 0;
 
  constructor() { }

  public CountCapital(sentence : string)
  {
    let i = 0;
    for (i = 0; i < sentence.length; i++)
    { 
  
      this.charToNum = sentence.charCodeAt(i);
      
      if(65 <= this.charToNum && this.charToNum <= 90)
      {
        this.count++;
      }
    }
    

    return this.count;
  }
}