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

  public buttonClicked : boolean | undefined;
     
  public fun()
  {
    this.buttonClicked = true;

    if(this.buttonClicked)
    {
      this.Message = "Educating for Better Tomorrow";
     
    }

    
    
  }

}
