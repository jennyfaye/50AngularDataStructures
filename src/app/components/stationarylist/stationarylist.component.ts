import { Component } from '@angular/core';

@Component({
  selector: 'app-stationarylist',
  templateUrl: './stationarylist.component.html',
  styleUrl: './stationarylist.component.css'
})
export class StationarylistComponent {
  stationaryList: string[] = ["paper","ballpen"];
  stationary: string = '';

  addStationary() {
    this.stationaryList.push(this.stationary);
  }
}
