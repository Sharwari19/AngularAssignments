import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h1>Marvellous Infosystems</h1>

  <div>
    <h2>Enter Your Name Here</h2>
    <input type = "text">
  </div>
  
  
  <router-outlet></router-outlet>`,

  styles: `h1
  {
    text-align : center;
    color : blue;
  }
  
 div
  {
    text-align : center;
    color : blue;
  }`
})
export class AppComponent {
  title = 'Assignment6.3';
}
