import { Component } from '@angular/core';
import { StringService } from '../string.service';


@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers : [StringService ]
})
export class Child2Component 
{
  public CapitalCharCount : number = 0;

  constructor(private _stringservice : StringService)
  {
    this.CapitalCharCount = this._stringservice.CountCapital("My Name is Sharwari!");
  }
}
