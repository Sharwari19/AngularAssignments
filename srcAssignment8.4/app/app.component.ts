import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public count : number = 0;
  public exceeded : any;
  public lengthCount(Text : any)
  {
    this.count = Text.length;

    if(this.count >= 150)
      this.exceeded = true;

  }
}
