import { StationarylistService } from './../../services/stationarylist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stationarylist',
  templateUrl: './stationarylist.component.html',
  styleUrl: './stationarylist.component.css'
})
export class StationarylistComponent {
  stationaryList: string[] = ["paper","ballpen"];
  stationary: string = '';

  constructor(private stationarylistService: StationarylistService){
  }

  ngOnInit(): void {
    this.stationaryList = this.stationarylistService.getStationary();
  }

  addStationary(): void {
    this.stationarylistService.addStationary(this.stationary);
    this.stationary = '';
  }

  updateStationary(index: number): void {
    const currentName = this.stationaryList[index];
    const newName = prompt('Enter new stationaryt:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.stationarylistService.updateStationary(index, newName.trim());
    }
  }

  deleteStationary(index: number): void {
    this.stationarylistService.deleteStationary(index);
  }
}
