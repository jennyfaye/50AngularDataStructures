import { Component } from '@angular/core';

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flowerList: string[] = ["roses","tulips"];
  flower: string = '';

  addFlower() {
    this.flowerList.push(this.flower);
  }
}
