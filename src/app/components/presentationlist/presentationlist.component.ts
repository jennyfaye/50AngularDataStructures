import { Component } from '@angular/core';

@Component({
  selector: 'app-presentationlist',
  templateUrl: './presentationlist.component.html',
  styleUrl: './presentationlist.component.css'
})
export class PresentationlistComponent {
  presentationList: string[] = ["angular directives","angular pipe"];
  presentation: string = '';

  addPresentation() {
    this.presentationList.push(this.presentation);
  }
}
