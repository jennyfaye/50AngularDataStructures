import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VegetablelistService {
  private vegetableList: string[] = ["cabbage", "lettuce"];

  getVegetable(): string[]{
    return this.vegetableList;
  }
  addVegetable(vegetable: string): void{
    this.vegetableList.push(vegetable);
  }
  updateVegetable(index: number, vegetable: string): void {
    if (index >= 0 && index < this.vegetableList.length) {
      this.vegetableList[index] = vegetable;
    }
  }
  deleteVegetable(index: number): void {
    if (index >= 0 && index < this.vegetableList.length) {
      this.vegetableList.splice(index, 1);
    }
  }
}
