import { Component } from '@angular/core';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrl: './podcastlist.component.css'
})
export class PodcastlistComponent {
  podcastList: string[] = ["Rotten Mango - Episode 102: The Korean Black Widow: Chilling Murder Plot", "Rotten Mango - Episode 65: The Unsolved Murder of the Tegan and Sara Fans" ];
  podcast: string = '';

  addPodcast() {
    this.podcastList.push(this.podcast);
  }
}
