import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastlistService {
  private podcastList: string[] = ["Rotten Mango - Episode 102: The Korean Black Widow: Chilling Murder Plot", "Rotten Mango - Episode 65: The Unsolved Murder of the Tegan and Sara Fans" ];

  getPodcast(): string[]{
    return this.podcastList;
  }
  addPodcast(podcast: string): void{
    this.podcastList.push(podcast);
  }
  updatePodcast(index: number, podcast: string): void {
    if (index >= 0 && index < this.podcastList.length) {
      this.podcastList[index] = podcast;
    }
  }
  deletePodcast(index: number): void {
    if (index >= 0 && index < this.podcastList.length) {
      this.podcastList.splice(index, 1);
    }
  }
}
