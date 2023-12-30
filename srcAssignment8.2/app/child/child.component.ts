import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Input() public parentToChild : any;

  @Output() public childToParent = new EventEmitter<string>();

  public SendData()
  {
    this.childToParent.emit("Hello from Child");
  }

}
