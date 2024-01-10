import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [NumberService, StringService ]
})
export class ChildComponent 
{
  public isPrime1 : string = "";
  public isPrime2 : string = "";
  public numToChk1 : number = 77;
  public numToChk2 : number = 37;

  public sentence1 : string = "Hello! I'm Learning Angular";
  public sentence2 : string = "Talk is Cheap, Show me the Code."
  public count1 : number = 0;
  public count2 : number = 0;

  constructor(private _numberservice1 : NumberService, private _numberservice2  : NumberService)
  {
    this.isPrime1 = this._numberservice1.ChkPrime(this.numToChk1);
    this.isPrime2 = this._numberservice2.ChkPrime(this.numToChk2);

    this.count1 =  new StringService().CountCapital(this.sentence1);
    this.count2 = new StringService().CountCapital(this.sentence2);


   
  }

}
