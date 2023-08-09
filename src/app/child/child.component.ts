import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() myName !:string;
  @Output() moveOutEvent = new EventEmitter<void>();

  moveOut(name: string) {
    this.moveOutEvent.emit();
  }
}
