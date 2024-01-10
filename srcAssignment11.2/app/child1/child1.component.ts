import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService]
})
export class Child1Component 
{
  
  public isPrime : any;
  

  constructor(private _numberservice : NumberService)
  {
    this.isPrime = this._numberservice.ChkPrime(53);

  }
  
 

}
