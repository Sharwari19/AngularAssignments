import { Component, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  public value : any;
  @Output() public SendMessage = new EventEmitter();
  
  public SendData(Name : any)
  {

    this.value = Name;
    this.SendMessage.emit(this.value)
  }
}
