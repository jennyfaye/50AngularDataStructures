import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrl: './vegetablelist.component.css'
})
export class VegetablelistComponent {
  vegetableList: string[] = ["cabbage", "lettuce"];
  vegetable: string = '';

  addVegetable() {
    this.vegetableList.push(this.vegetable);
  }
}
