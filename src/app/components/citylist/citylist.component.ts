import { CitylistService } from './../../services/citylist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cityList: string[] = ["Caloocan City", "Pasay City"];
  city: string = '';

  constructor(private citylistService: CitylistService){
  }

  ngOnInit(): void {
    this.cityList = this.citylistService.getCity();
  }

  addCity(): void {
    this.citylistService.addCity(this.city);
    this.city = '';
  }

  updateCity(index: number): void {
    const currentName = this.cityList[index];
    const newName = prompt('Enter new city:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.citylistService.updateCity(index, newName.trim());
    }
  }

  deleteCity(index: number): void {
    this.citylistService.deleteCity(index);
  }
}
