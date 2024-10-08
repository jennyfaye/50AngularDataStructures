import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicplaylistService {
  musicList: string[] = ["Down Bad", "The Prophecy"];

  getMusic(): string[]{
    return this.musicList;
  }
  addMusic(music: string): void{
    this.musicList.push(music);
  }
  updateMusic(index: number, music: string): void {
    if (index >= 0 && index < this.musicList.length) {
      this.musicList[index] = music;
    }
  }
  deleteMusic(index: number): void {
    if (index >= 0 && index < this.musicList.length) {
      this.musicList.splice(index, 1);
    }
  }
}
