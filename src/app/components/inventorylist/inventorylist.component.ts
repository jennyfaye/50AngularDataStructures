import { Component, OnInit } from '@angular/core';
import { Inventory } from './inventory';

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent implements OnInit{
  itemList: Inventory[] = [];
  item: string = '';
  quantity: number = 0;
  price: number = 0;

  ngOnInit() {
  }

  addItem() {
    const newItem: Inventory = {
      itemList: '',
      item: this.item,
      quantity: this.quantity,
      price: this.price
    };

    this.itemList.push(newItem);
  }
}
