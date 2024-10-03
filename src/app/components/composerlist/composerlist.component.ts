import { Component } from '@angular/core';

@Component({
  selector: 'app-composerlist',
  templateUrl: './composerlist.component.html',
  styleUrl: './composerlist.component.css'
})
export class ComposerlistComponent {
  composerList: string[] = ["Beethoven", "Mozart"];
  composer: string = '';

  addComposer() {
    this.composerList.push(this.composer);
  }
}
