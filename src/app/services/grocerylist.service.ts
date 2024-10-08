import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrocerylistService {
  private groceryList: string[] = ["butter", "flour"];

  getGrocery(): string[]{
    return this.groceryList;
  }
  addGrocery(grocery: string): void{
    this.groceryList.push(grocery);
  }
  updateGrocery(index: number, grocery: string): void {
    if (index >= 0 && index < this.groceryList.length) {
      this.groceryList[index] = grocery;
    }
  }
  deleteGrocery(index: number): void {
    if (index >= 0 && index < this.groceryList.length) {
      this.groceryList.splice(index, 1);
    }
  }
}
