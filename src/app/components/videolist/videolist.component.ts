import { Component } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videoList: string[] = ["Planet Earth", "Footage from the 1969 Moon Landing"];
  video: string = '';

  addVideo() {
    this.videoList.push(this.video);
  }
}
