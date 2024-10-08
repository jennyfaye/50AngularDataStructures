import { ArtistlistService } from './../../services/artistlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {
  artistList: string[] = [];
  artist: string = '';

  constructor(private artistlistService: ArtistlistService){
  }

  ngOnInit(): void {
    this.artistList = this.artistlistService.getArtist();
  }

  addArtist(): void {
    this.artistlistService.addArtist(this.artist);
    this.artist = '';
  }

  updateArtist(index: number): void {
    const currentName = this.artistList[index];
    const newName = prompt('Enter new artist name:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.artistlistService.updateArtist(index, newName.trim());
    }
  }

  deleteArtist(index: number): void {
    this.artistlistService.deleteArtist(index);
  }
}
