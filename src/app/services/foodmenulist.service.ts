import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodmenulistService {
  private foodList: string[] = ["Steak", "Pasta"];

  getFood(): string[]{
    return this.foodList;
  }
  addFood(food: string): void{
    this.foodList.push(food);
  }
  updateFood(index: number, food: string): void {
    if (index >= 0 && index < this.foodList.length) {
      this.foodList[index] = food;
    }
  }
  deleteFood(index: number): void {
    if (index >= 0 && index < this.foodList.length) {
      this.foodList.splice(index, 1);
    }
  }
}
