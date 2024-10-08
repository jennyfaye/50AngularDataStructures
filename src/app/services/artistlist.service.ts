import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistlistService {
  private artistList: string[] = ["Benedicto Cabrera", "Juan Luna"];

  getArtist(): string[]{
    return this.artistList;
  }
  addArtist(artist: string): void{
    this.artistList.push(artist);
  }
  updateArtist(index: number, artist: string): void {
    if (index >= 0 && index < this.artistList.length) {
      this.artistList[index] = artist;
    }
  }
  deleteArtist(index: number): void {
    if (index >= 0 && index < this.artistList.length) {
      this.artistList.splice(index, 1);
    }
  }
}
