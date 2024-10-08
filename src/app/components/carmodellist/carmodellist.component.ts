import { CarmodellistService } from './../../services/carmodellist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent {
  carModelList: string[] = [];
  carModel: string = '';

  constructor(private carmodellistService: CarmodellistService){
  }

  ngOnInit(): void {
    this.carModelList = this.carmodellistService.getCarmodel();
  }

  addCarmodel(): void {
    this.carmodellistService.addCarmodel(this.carModel);
    this.carModel = '';
  }

  updateCarmodel(index: number): void {
    const currentName = this.carModelList[index];
    const newName = prompt('Enter new car model:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.carmodellistService.updateCarmodel(index, newName.trim());
    }
  }

  deleteCarmodel(index: number): void {
    this.carmodellistService.deleteCarmodel(index);
  }
}
