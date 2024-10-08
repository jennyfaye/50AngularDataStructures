import { MealplanlistService } from './../../services/mealplanlist.service';
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

  constructor(private mealplanlistService: MealplanlistService){
  }

  ngOnInit(): void {
    this.mealList = this.mealplanlistService.getMeals();
  }

  addMeal(): void {
    if (this.day && this.breakfast && this.lunch && this.dinner) {
      const newMeal: MealPlan = {
        day: this.day,
        breakfast: this.breakfast,
        lunch: this.lunch,
        dinner: this.dinner,
        mealList: ''
      };
      this.mealplanlistService.addMeal(newMeal);
      this.day = '';
      this.breakfast = '';
      this.lunch = '';
      this.dinner = '';
    }
  }

  updateMeal(index: number): void {
    const currentMeal = this.mealList[index];
    const newDay = prompt('Enter new day:', currentMeal.day);
    const newBreakfast = prompt('Enter new breakfast:', currentMeal.breakfast);
    const newLunch = prompt('Enter new lunch:', currentMeal.lunch);
    const newDinner = prompt('Enter new dinner:', currentMeal.dinner);

    if (newDay && newBreakfast && newLunch && newDinner) {
      this.mealplanlistService.updateMeal(index, {
        day: newDay,
        breakfast: newBreakfast,
        lunch: newLunch,
        dinner: newDinner,
        mealList: ''
      });
    }
  }

  deleteMeal(index: number): void {
    this.mealplanlistService.deleteMeal(index);
  }
}
