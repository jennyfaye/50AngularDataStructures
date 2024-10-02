import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  nameList: string[] = ["John Doe", "Jane Doe"];
  name: string = '';

  addEmployee() {
    this.nameList.push(this.name);
  }
}
