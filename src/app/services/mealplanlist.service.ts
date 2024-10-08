import { Injectable } from '@angular/core';
import { MealPlan } from '../components/mealplanlist/mealplan';

@Injectable({
  providedIn: 'root'
})
export class MealplanlistService {
  private mealList: MealPlan[] = [];

  getMeals(): MealPlan[] {
    return this.mealList;
  }

  addMeal(meal: MealPlan): void {
    this.mealList.push(meal);
  }

  updateMeal(index: number, meal: MealPlan): void {
    if (index >= 0 && index < this.mealList.length) {
      this.mealList[index] = meal;
    }
  }

  deleteMeal(index: number): void {
    if (index >= 0 && index < this.mealList.length) {
      this.mealList.splice(index, 1);
    }
  }
}
