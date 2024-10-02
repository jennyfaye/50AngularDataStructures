import { Component } from '@angular/core';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent {
  musicList: string[] = ["Down Bad", "The Prophecy"];
  music: string = '';

  addMusic() {
    this.musicList.push(this.music);
  }
}
