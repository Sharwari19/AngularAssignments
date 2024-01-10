import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ArithmeticService } from './arithmetic.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [ArithmeticService]
})
export class AppComponent {
  title = 'Assignment11.1';
}
