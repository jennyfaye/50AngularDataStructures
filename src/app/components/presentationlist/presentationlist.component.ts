import { PresentationlistService } from './../../services/presentationlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presentationlist',
  templateUrl: './presentationlist.component.html',
  styleUrl: './presentationlist.component.css'
})
export class PresentationlistComponent {
  presentationList: string[] = [];
  presentation: string = '';

  constructor(private presentationlistService: PresentationlistService){
  }

  ngOnInit(): void {
    this.presentationList = this.presentationlistService.getPresentation();
  }

  addPresentation(): void {
    this.presentationlistService.addPresentation(this.presentation);
    this.presentation = '';
  }

  updatePresentation(index: number): void {
    const currentName = this.presentationList[index];
    const newName = prompt('Enter new presentation:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.presentationlistService.updatePresentation(index, newName.trim());
    }
  }

  deletePresentation(index: number): void {
    this.presentationlistService.deletePresentation(index);
  }
}
