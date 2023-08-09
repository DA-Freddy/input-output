import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  children= ['Tina','Bibi','Lillyfe','Ken'];

  moveOutChild(index :number){
    // let index = this.children.indexOf(name);
    this.children.splice(index,1);
  }
}
