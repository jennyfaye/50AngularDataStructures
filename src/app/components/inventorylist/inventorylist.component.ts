import { InventorylistService } from './../../services/inventorylist.service';
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

  constructor(private inventorylistService: InventorylistService){
  }

  ngOnInit(): void {
    this.itemList = this.inventorylistService.getItem();
  }

  addItem(): void {
    if (this.item && this.quantity && this.price) {
      const newItem: Inventory = {
        item: this.item, quantity: this.quantity, price: this.price,
        itemList: ''
      };
      this.inventorylistService.addItem(newItem);
      this.item = '';
      this.quantity = 0;
      this.price = 0;
    }
  }

  updateItem(index: number): void {
    const currentItem = this.itemList[index];
    const newItemName = prompt('Enter new item name:', currentItem.item);
    const newQuantity = prompt('Enter new quantity:', currentItem.quantity.toString());
    const newPrice = prompt('Enter new price:', currentItem.price.toString());

    if (newItemName !== null && newItemName.trim() !== '' && newQuantity !== null && newQuantity.trim() !== '' && newPrice !== null && newPrice.trim() !== '') {
      this.inventorylistService.updateItem(index, {
        item: newItemName.trim(), quantity: +newQuantity, price: +newPrice,
        itemList: ''
      });
    }
  }

  deleteItem(index: number): void {
    this.inventorylistService.deleteItem(index);
  }
}
