import { TourlistService } from './../../services/tourlist.service';
import { Component, OnInit } from '@angular/core';
import { TourDate } from './tourlist';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrl: './tourlist.component.css'
})
export class TourlistComponent implements OnInit {
  tourList: TourDate[] = [];
  artist: string = '';
  date: string = '';
  location: string = '';

  constructor(private tourlistService: TourlistService){
  }

  ngOnInit(): void {
    this.tourList = this.tourlistService.getTour();
  }

  addTour(): void {
    if (this.artist && this.date && this.location) {
      const newTour: TourDate = {
        artist: this.artist, date: this.date, location: this.location,
        tourList: ''
      };
      this.tourlistService.addTour(newTour);
      this.artist = '';
      this.date = '';
      this.location = '';
    }
  }

  updateTour(index: number): void {
    const currentTour = this.tourList[index];
    const newArtist = prompt('Enter new artist name:', currentTour.artist);
    const newDate = prompt('Enter new tour date:', currentTour.date);
    const newLocation = prompt('Enter new location:', currentTour.location);

    if (newArtist && newDate && newLocation) {
      this.tourlistService.updateTour(index, {
        artist: newArtist.trim(),
        date: newDate.trim(),
        location: newLocation.trim(),
        tourList: ''
      });
    }
  }

  deleteTour(index: number): void {
    this.tourlistService.deleteTour(index);
  }
}
