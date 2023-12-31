import { Component } from '@angular/core';
import { CompSuccessDirective } from '../comp-success.directive';
import { CompFailureDirective } from '../comp-failure.directive';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ CompSuccessDirective,  CompFailureDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{

}
