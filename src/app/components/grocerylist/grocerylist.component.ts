import { GrocerylistService } from './../../services/grocerylist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrl: './grocerylist.component.css'
})
export class GrocerylistComponent {
  groceryList: string[] = [];
  grocery: string = '';

  constructor(private grocerylistService: GrocerylistService){
  }

  ngOnInit(): void {
    this.groceryList = this.grocerylistService.getGrocery();
  }

  addGrocery(): void {
    this.grocerylistService.addGrocery(this.grocery);
    this.grocery = '';
  }

  updateGrocery(index: number): void {
    const currentName = this.groceryList[index];
    const newName = prompt('Enter new product:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.grocerylistService.updateGrocery(index, newName.trim());
    }
  }

  deleteGrocery(index: number): void {
    this.grocerylistService.deleteGrocery(index);
  }
}
