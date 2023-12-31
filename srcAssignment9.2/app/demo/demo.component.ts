import { Component } from '@angular/core';
import { MyAddPipe } from '../my-add.pipe';
import { MyMultPipe } from '../my-mult.pipe';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MyAddPipe, MyMultPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{

}
