import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})
export class DemoComponent 
{
   public Result1 : number = 0; 
   public Result2 : number = 0;

  constructor(private _ArithmeticServicesAdd : ArithmeticService, private _ArithmeticServicesSub : ArithmeticService)
  {
    this.Result1 = this._ArithmeticServicesAdd.Add(45, 77);
    this.Result2 = this._ArithmeticServicesSub.Sub(98, 155);
  }
}



