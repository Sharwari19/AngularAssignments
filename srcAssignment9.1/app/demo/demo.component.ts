import { Component } from '@angular/core';
import { MyRevPipe } from '../my-rev.pipe';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MyRevPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Name : string = "Marvellous";

}
