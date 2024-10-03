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

    ngOnInit() {
    }

    addDate() {
      const newTour: TourDate = {
        tourList: '',
        artist: this.artist,
        date: this.date,
        location: this.location
      };
      this.tourList.push(newTour);
    }
}
