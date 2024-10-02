import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectureList: string[] = ["GitHub","Angular"];
  lecture: string = '';

  addLecture() {
    this.lectureList.push(this.lecture);
  }
}
