import { SubjectlistService } from './../../services/subjectlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {
  subjectList: string[] = [];
  subject: string = '';

  constructor(private subjectlistService: SubjectlistService){
  }

  ngOnInit(): void {
    this.subjectList = this.subjectlistService.getSubject();
  }

  addSubject(): void {
    this.subjectlistService.addSubject(this.subject);
    this.subject = '';
  }

  updateSubject(index: number): void {
    const currentName = this.subjectList[index];
    const newName = prompt('Enter new subject:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.subjectlistService.updateSubject(index, newName.trim());
    }
  }

  deleteSubject(index: number): void {
    this.subjectlistService.deleteSubject(index);
  }
}
