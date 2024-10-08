import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptoplistService {
  private laptopList: string[] = ["Lenovo", "Acer"];

  getLaptop(): string[]{
    return this.laptopList;
  }
  addLaptop(laptop: string): void{
    this.laptopList.push(laptop);
  }
  updateLaptop(index: number, laptop: string): void {
    if (index >= 0 && index < this.laptopList.length) {
      this.laptopList[index] = laptop;
    }
  }
  deleteLaptop(index: number): void {
    if (index >= 0 && index < this.laptopList.length) {
      this.laptopList.splice(index, 1);
    }
  }
}
