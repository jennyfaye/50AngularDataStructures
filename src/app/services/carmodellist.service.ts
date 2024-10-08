import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarmodellistService {
  private  carModelList: string[] = ["Sedan", "SUV"];

  getCarmodel(): string[]{
    return this.carModelList;
  }
  addCarmodel(carModel: string): void{
    this.carModelList.push(carModel);
  }
  updateCarmodel(index: number, carModel: string): void {
    if (index >= 0 && index < this.carModelList.length) {
      this.carModelList[index] = carModel;
    }
  }
  deleteCarmodel(index: number): void {
    if (index >= 0 && index < this.carModelList.length) {
      this.carModelList.splice(index, 1);
    }
  }
}
