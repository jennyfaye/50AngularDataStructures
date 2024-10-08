import { BudgetlistService } from './../../services/budgetlist.service';
import { Component , OnInit } from '@angular/core';
import { Budget } from './budget';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrl: './budgetlist.component.css'
})
export class BudgetlistComponent implements OnInit {
  budgetList: Budget[] = [];
  item: string = '';
  amount: number = 0;

  constructor(private budgetlistService: BudgetlistService){
  }

  ngOnInit(): void {
    this.budgetList = this.budgetlistService.getBudgets();
  }

  addBudget(): void {
    if (this.item && this.amount > 0) {
      const newBudget: Budget = {
        item: this.item, amount: this.amount,
        budgetList: ''
      };
      this.budgetlistService.addBudget(newBudget);
      this.item = '';
      this.amount = 0;
    }
  }

  updateBudget(index: number): void {
    const currentBudget = this.budgetList[index];
    const newItem = prompt('Enter new item:', currentBudget.item);
    const newAmount = prompt('Enter new amount:', currentBudget.amount.toString());

    if (newItem && newAmount && +newAmount > 0) {
      this.budgetlistService.updateBudget(index, {
        item: newItem.trim(),
        amount: +newAmount,
        budgetList: ''
      });
    }
  }

  deleteBudget(index: number): void {
    this.budgetlistService.deleteBudget(index);
  }
}
