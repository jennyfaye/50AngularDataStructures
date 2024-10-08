import { Injectable } from '@angular/core';
import { LaptopSpec } from '../components/laptopspeclist/laptopspec';

@Injectable({
  providedIn: 'root'
})
export class LaptopspeclistService {
  private specList: LaptopSpec[] = [];

  getSpecs(): LaptopSpec[] {
    return this.specList;
  }

  addSpec(spec: LaptopSpec): void {
    this.specList.push(spec);
  }

  updateSpec(index: number, spec: LaptopSpec): void {
    if (index >= 0 && index < this.specList.length) {
      this.specList[index] = spec;
    }
  }

  deleteSpec(index: number): void {
    if (index >= 0 && index < this.specList.length) {
      this.specList.splice(index, 1);
    }
  }
}
