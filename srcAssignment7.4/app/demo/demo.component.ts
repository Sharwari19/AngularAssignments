import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Message : string = "Marvellous Infosystems";
  public Message1 : string = "";
  public Message2 : string = "";                             

  public upperMessage()
  {
     this.Message1 = this.Message.toUpperCase();
  }

  public lowerMessage()
  {
    this.Message2 = this.Message.toLowerCase();
  }

}
