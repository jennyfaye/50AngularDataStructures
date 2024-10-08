import { MusicplaylistService } from './../../services/musicplaylist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent {
  musicList: string[] = [];
  music: string = '';

  constructor(private musicplaylistService: MusicplaylistService){
  }

  ngOnInit(): void {
    this.musicList = this.musicplaylistService.getMusic();
  }

  addMusic(): void {
    this.musicplaylistService.addMusic(this.music);
    this.music = '';
  }

  updateMusic(index: number): void {
    const currentName = this.musicList[index];
    const newName = prompt('Enter new song title:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.musicplaylistService.updateMusic(index, newName.trim());
    }
  }

  deleteMusic(index: number): void {
    this.musicplaylistService.deleteMusic(index);
  }
}
