import { ClassroomlistService } from './../../services/classroomlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  studentList: string[] = [];
  student: string = '';

  constructor(private classroomlistService: ClassroomlistService){
  }

  ngOnInit(): void {
    this.studentList = this.classroomlistService.getStudent();
  }

  addStudent(): void {
    this.classroomlistService.addStudent(this.student);
    this.student = '';
  }

  updateStudent(index: number): void {
    const currentName = this.studentList[index];
    const newName = prompt('Enter new name for the student:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.classroomlistService.updateStudent(index, newName.trim());
    }
  }

  deleteStudent(index: number): void {
    this.classroomlistService.deleteStudent(index);
  }
}
