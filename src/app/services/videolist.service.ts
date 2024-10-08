import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideolistService {
  private videoList: string[] = ["Planet Earth", "Footage from the 1969 Moon Landing"];

  getVideo(): string[]{
    return this.videoList;
  }
  addVideo(video: string): void{
    this.videoList.push(video);
  }
  updateVideo(index: number, video: string): void {
    if (index >= 0 && index < this.videoList.length) {
      this.videoList[index] = video;
    }
  }
  deleteVideo(index: number): void {
    if (index >= 0 && index < this.videoList.length) {
      this.videoList.splice(index, 1);
    }
  }
}
