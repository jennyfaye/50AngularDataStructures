import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassroomlistService {
  private studentList: string[] = ["Juan Tamad", "Maria Makiling"];

  getStudent(): string[]{
    return this.studentList;
  }
  addStudent(student: string): void{
    this.studentList.push(student);
  }
  updateStudent(index: number, student: string): void {
    if (index >= 0 && index < this.studentList.length) {
      this.studentList[index] = student;
    }
  }
  deleteStudent(index: number): void {
    if (index >= 0 && index < this.studentList.length) {
      this.studentList.splice(index, 1);
    }
  }
}
