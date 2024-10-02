import { Component } from '@angular/core';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptopList: string[] = ["Lenovo", "Acer"];
  laptop: string = '';

  addLaptop() {
    this.laptopList.push(this.laptop);
  }
}
