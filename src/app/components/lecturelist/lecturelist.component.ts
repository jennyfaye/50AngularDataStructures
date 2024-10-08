import { LecturelistService } from './../../services/lecturelist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {
  lectureList: string[] = ["GitHub","Angular"];
  lecture: string = '';

  constructor(private lecturelistService: LecturelistService){
  }

  ngOnInit(): void {
    this.lectureList = this.lecturelistService.getLecture();
  }

  addLecture(): void {
    this.lecturelistService.addLecture(this.lecture);
    this.lecture = '';
  }

  updateLecture(index: number): void {
    const currentName = this.lectureList[index];
    const newName = prompt('Enter new lecture:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.lecturelistService.updateLecture(index, newName.trim());
    }
  }

  deleteLecture(index: number): void {
    this.lecturelistService.deleteLecture(index);
  }
}
