import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessorylistService {
  private accessoryList: string[] = ["phonecase","popsocket"];

  getAccessory(): string[]{
    return this.accessoryList;
  }
  addAccessory(accessory: string): void{
    this.accessoryList.push(accessory);
  }
  updateAccessory(index: number, accessory: string): void {
    if (index >= 0 && index < this.accessoryList.length) {
      this.accessoryList[index] = accessory;
    }
  }
  deleteAccessory(index: number): void {
    if (index >= 0 && index < this.accessoryList.length) {
      this.accessoryList.splice(index, 1);
    }
  }
}
