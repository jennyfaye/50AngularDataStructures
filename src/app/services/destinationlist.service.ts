import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationlistService {
  private destinationList: string[] = ["Tokyo, Japan", "Paris, France"];

  getDestination(): string[]{
    return this.destinationList;
  }
  addDestination(destination: string): void{
    this.destinationList.push(destination);
  }
  updateDestination(index: number, destination: string): void {
    if (index >= 0 && index < this.destinationList.length) {
      this.destinationList[index] = destination;
    }
  }
  deleteDestination(index: number): void {
    if (index >= 0 && index < this.destinationList.length) {
      this.destinationList.splice(index, 1);
    }
  }
}
