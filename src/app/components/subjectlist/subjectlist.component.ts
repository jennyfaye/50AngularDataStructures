import { Component } from '@angular/core';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {
  subjectList: string[] = ["SIA 102", "IAS 102"];
  subject: string = '';

  addSubject() {
    this.subjectList.push(this.subject);
  }
}
