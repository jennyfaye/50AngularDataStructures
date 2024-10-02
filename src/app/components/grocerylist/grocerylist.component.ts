import { Component } from '@angular/core';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrl: './grocerylist.component.css'
})
export class GrocerylistComponent {
  groceryList: string[] = ["butter", "flour"];
  grocery: string = '';

  addGrocery() {
    this.groceryList.push(this.grocery);
  }
}
