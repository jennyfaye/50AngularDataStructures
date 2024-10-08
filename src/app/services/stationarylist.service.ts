import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StationarylistService {
  private stationaryList: string[] = ["paper","ballpen"];

  getStationary(): string[]{
    return this.stationaryList;
  }
  addStationary(stationary: string): void{
    this.stationaryList.push(stationary);
  }
  updateStationary(index: number, stationary: string): void {
    if (index >= 0 && index < this.stationaryList.length) {
      this.stationaryList[index] = stationary;
    }
  }
  deleteStationary(index: number): void {
    if (index >= 0 && index < this.stationaryList.length) {
      this.stationaryList.splice(index, 1);
    }
  }
}
