import { CountrylistService } from './../../services/countrylist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent {
  countryList: string[] = [];
  country: string = '';

  constructor(private countrylistService: CountrylistService){
  }

  ngOnInit(): void {
    this.countryList = this.countrylistService.getCountry();
  }

  addCountry(): void {
    this.countrylistService.addCountry(this.country);
    this.country = '';
  }

  updateCountry(index: number): void {
    const currentName = this.countryList[index];
    const newName = prompt('Enter new country:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.countrylistService.updateCountry(index, newName.trim());
    }
  }

  deleteCountry(index: number): void {
    this.countrylistService.deleteCountry(index);
  }
}
