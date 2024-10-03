import { Component, OnInit } from '@angular/core';
import { MealPlan } from './mealplan';

@Component({
  selector: 'app-mealplanlist',
  templateUrl: './mealplanlist.component.html',
  styleUrl: './mealplanlist.component.css'
})
export class MealplanlistComponent implements OnInit{
  mealList: MealPlan[] = [];
  day: string = '';
  breakfast: string = '';
  lunch: string = '';
  dinner: string = '';

  ngOnInit() {
  }

  addMeal() {
    const newMeal: MealPlan = {
      mealList: '',
      day: this.day,
      breakfast: this.breakfast,
      lunch: this.lunch,
      dinner: this.dinner
    };
    this.mealList.push(newMeal);
  }
}
