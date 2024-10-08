import { Injectable } from '@angular/core';
import { TourDate } from '../components/tourlist/tourlist';

@Injectable({
  providedIn: 'root'
})
export class TourlistService {
  private tourList: TourDate[] = [];

  getTour(): TourDate[] {
    return this.tourList;
  }

  addTour(tour: TourDate): void {
    this.tourList.push(tour);
  }

  updateTour(index: number, tour: TourDate): void {
    if (index >= 0 && index < this.tourList.length) {
      this.tourList[index] = tour;
    }
  }

  deleteTour(index: number): void {
    if (index >= 0 && index < this.tourList.length) {
      this.tourList.splice(index, 1);
    }
  }
}
