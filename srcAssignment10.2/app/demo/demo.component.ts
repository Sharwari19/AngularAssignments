import { Component } from '@angular/core';
import { CustomStyleDirective } from '../custom-style.directive';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CustomStyleDirective],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}
