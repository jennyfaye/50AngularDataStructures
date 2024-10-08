import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrylistService {
  private countryList: string[] = ["Japan","Switzerland"];

  getCountry(): string[]{
    return this.countryList;
  }
  addCountry(country: string): void{
    this.countryList.push(country);
  }
  updateCountry(index: number, country: string): void {
    if (index >= 0 && index < this.countryList.length) {
      this.countryList[index] = country;
    }
  }
  deleteCountry(index: number): void {
    if (index >= 0 && index < this.countryList.length) {
      this.countryList.splice(index, 1);
    }
  }
}
