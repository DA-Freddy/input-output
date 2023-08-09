import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() myName !:string;
  @Output() moveOutEvent = new EventEmitter<void>();

  moveOut() {
    this.moveOutEvent.emit();
  }
}
