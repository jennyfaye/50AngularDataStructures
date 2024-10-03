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

  ngOnInit() {
  }

  addBudget() {
    const newBudget: Budget = {
      budgetList: '',
      item: this.item,
      amount: this.amount,
    };
    this.budgetList.push(newBudget);
  }
}
