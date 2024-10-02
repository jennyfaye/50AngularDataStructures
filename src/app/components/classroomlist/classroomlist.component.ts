import { Component } from '@angular/core';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  nameList: string[] = ["Juan Tamad", "Maria Makiling"];
  name: string = '';

  addName() {
    this.nameList.push(this.name);
  }
}
