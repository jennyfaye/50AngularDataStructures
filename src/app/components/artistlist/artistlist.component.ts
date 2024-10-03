import { Component } from '@angular/core';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {
  artistList: string[] = ["Benedicto Cabrera", "Juan Luna"];
  artist: string = '';

  addArtist() {
    this.artistList.push(this.artist);
  }
}
