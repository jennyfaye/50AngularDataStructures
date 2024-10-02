import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
  courseList: string[] = ["BSIT", "BSTM"];
  course: string = '';

  addCourse() {
    this.courseList.push(this.course);
  }
}
