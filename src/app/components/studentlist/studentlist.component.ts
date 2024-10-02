import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  nameList: string[] = ["Jenny", "Angeline"];
  name: string = '';

  addStudent() {
    this.nameList.push(this.name);
  }
}
