import { ComposerlistService } from './../../services/composerlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-composerlist',
  templateUrl: './composerlist.component.html',
  styleUrl: './composerlist.component.css'
})
export class ComposerlistComponent {
  composerList: string[] = [];
  composer: string = '';

  constructor(private composerlistService: ComposerlistService){
  }

  ngOnInit(): void {
    this.composerList = this.composerlistService.getComposer();
  }

  addComposer(): void {
    this.composerlistService.addComposer(this.composer);
    this.composer = '';
  }

  updateComposer(index: number): void {
    const currentName = this.composerList[index];
    const newName = prompt('Enter new composer name:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.composerlistService.updateComposer(index, newName.trim());
    }
  }

  deleteComposer(index: number): void {
    this.composerlistService.deleteComposer(index);
  }
}
