import { Injectable } from '@angular/core';
import { Budget } from '../components/budgetlist/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetlistService {
  private budgetList: Budget[] = [];

  getBudgets(): Budget[] {
    return this.budgetList;
  }

  addBudget(budget: Budget): void {
    this.budgetList.push(budget);
  }

  updateBudget(index: number, budget: Budget): void {
    if (index >= 0 && index < this.budgetList.length) {
      this.budgetList[index] = budget;
    }
  }

  deleteBudget(index: number): void {
    if (index >= 0 && index < this.budgetList.length) {
      this.budgetList.splice(index, 1);
    }
  }
}
