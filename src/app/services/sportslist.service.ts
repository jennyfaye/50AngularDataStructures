import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportslistService {
  private sportList: string[] = ["Archery", "Swimming"];

  getSport(): string[]{
    return this.sportList;
  }
  addSport(sport: string): void{
    this.sportList.push(sport);
  }
  updateSport(index: number, sport: string): void {
    if (index >= 0 && index < this.sportList.length) {
      this.sportList[index] = sport;
    }
  }
  deleteSport(index: number): void {
    if (index >= 0 && index < this.sportList.length) {
      this.sportList.splice(index, 1);
    }
  }
}
