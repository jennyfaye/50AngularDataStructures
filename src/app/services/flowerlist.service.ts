import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowerlistService {
  private flowerList: string[] = ["roses","tulips"];

  getFlower(): string[]{
    return this.flowerList;
  }
  addFlower(flower: string): void{
    this.flowerList.push(flower);
  }
  updateFlower(index: number, flower: string): void {
    if (index >= 0 && index < this.flowerList.length) {
      this.flowerList[index] = flower;
    }
  }
  deleteFlower(index: number): void {
    if (index >= 0 && index < this.flowerList.length) {
      this.flowerList.splice(index, 1);
    }
  }
}
