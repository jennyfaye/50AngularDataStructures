import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitylistService {
  private cityList: string[] = ["Caloocan City", "Pasay City"];

  getCity(): string[]{
    return this.cityList;
  }
  addCity(city: string): void{
    this.cityList.push(city);
  }
  updateCity(index: number, city: string): void {
    if (index >= 0 && index < this.cityList.length) {
      this.cityList[index] = city;
    }
  }
  deleteCity(index: number): void {
    if (index >= 0 && index < this.cityList.length) {
      this.cityList.splice(index, 1);
    }
  }
}
