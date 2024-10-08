import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LecturelistService {
  private lectureList: string[] = ["GitHub","Angular"];

  getLecture(): string[]{
    return this.lectureList;
  }
  addLecture(student: string): void{
    this.lectureList.push(student);
  }
  updateLecture(index: number, student: string): void {
    if (index >= 0 && index < this.lectureList.length) {
      this.lectureList[index] = student;
    }
  }
  deleteLecture(index: number): void {
    if (index >= 0 && index < this.lectureList.length) {
      this.lectureList.splice(index, 1);
    }
  }
}
