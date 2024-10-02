import { Component } from '@angular/core';

@Component({
  selector: 'app-foodmenulist',
  templateUrl: './foodmenulist.component.html',
  styleUrl: './foodmenulist.component.css'
})
export class FoodmenulistComponent {
  foodList: string[] = ["Steak", "Pasta"];
  food: string = '';

  addFood() {
    this.foodList.push(this.food);
  }
}
