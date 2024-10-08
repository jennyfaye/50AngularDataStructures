import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvshowlistService {
  private showList: string[] = ["It's Showtime", "Kapuso Mo, Jessica Soho (KMJS)"];

  getShow(): string[]{
    return this.showList;
  }
  addShow(show: string): void{
    this.showList.push(show);
  }
  updateShow(index: number, show: string): void {
    if (index >= 0 && index < this.showList.length) {
      this.showList[index] = show;
    }
  }
  deleteShow(index: number): void {
    if (index >= 0 && index < this.showList.length) {
      this.showList.splice(index, 1);
    }
  }
}
