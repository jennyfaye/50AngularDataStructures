import { FoodmenulistService } from './../../services/foodmenulist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-foodmenulist',
  templateUrl: './foodmenulist.component.html',
  styleUrl: './foodmenulist.component.css'
})
export class FoodmenulistComponent {
  foodList: string[] = [];
  food: string = '';

  constructor(private foodmenulistService: FoodmenulistService){
  }

  ngOnInit(): void {
    this.foodList = this.foodmenulistService.getFood();
  }

  addFood(): void {
    this.foodmenulistService.addFood(this.food);
    this.food = '';
  }

  updateFood(index: number): void {
    const currentName = this.foodList[index];
    const newName = prompt('Enter new food:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.foodmenulistService.updateFood(index, newName.trim());
    }
  }

  deleteFood(index: number): void {
    this.foodmenulistService.deleteFood(index);
  }
}
