import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectlistService {
  private subjectList: string[] = ["SIA 102", "IAS 102"];

  getSubject(): string[]{
    return this.subjectList;
  }
  addSubject(subject: string): void{
    this.subjectList.push(subject);
  }
  updateSubject(index: number, subject: string): void {
    if (index >= 0 && index < this.subjectList.length) {
      this.subjectList[index] = subject;
    }
  }
  deleteSubject(index: number): void {
    if (index >= 0 && index < this.subjectList.length) {
      this.subjectList.splice(index, 1);
    }
  }
}
