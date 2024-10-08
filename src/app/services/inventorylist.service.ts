import { Injectable } from '@angular/core';
import { Inventory } from '../components/inventorylist/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventorylistService {
  private itemList: Inventory[] = [];

  getItem(): Inventory[] {
    return this.itemList;
  }

  addItem(item: Inventory): void {
    this.itemList.push(item);
  }

  updateItem(index: number, item:Inventory): void {
    if (index >= 0 && index < this.itemList.length) {
      this.itemList[index] = item;
    }
  }

  deleteItem(index: number): void {
    if (index >= 0 && index < this.itemList.length) {
      this.itemList.splice(index, 1);
    }
  }
}
