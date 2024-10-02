import { Component } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent {
  countryList: string[] = ["Japan","Switzerland"];
  country: string = '';

  addCountry() {
    this.countryList.push(this.country);
  }
}
