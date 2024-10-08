import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FurniturelistService {
  private furnitureList: string[] = ["table", "chair"];

  getFurniture(): string[]{
    return this.furnitureList;
  }
  addFurniture(furniture: string): void{
    this.furnitureList.push(furniture);
  }
  updateFurniture(index: number, furniture: string): void {
    if (index >= 0 && index < this.furnitureList.length) {
      this.furnitureList[index] = furniture;
    }
  }
  deleteFurniture(index: number): void {
    if (index >= 0 && index < this.furnitureList.length) {
      this.furnitureList.splice(index, 1);
    }
  }
}
