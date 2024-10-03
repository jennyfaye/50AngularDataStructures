import { Component } from '@angular/core';

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrl: './furniturelist.component.css'
})
export class FurniturelistComponent {
  furnitureList: string[] = ["table", "chair"];
  furniture: string = '';

  addFurniture() {
    this.furnitureList.push(this.furniture);
  }
}
