import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModelList: string[] = ["Sedan", "SUV"];
  carModel: string = '';

  addCarModel() {
    this.carModelList.push(this.carModel);
  }
}
