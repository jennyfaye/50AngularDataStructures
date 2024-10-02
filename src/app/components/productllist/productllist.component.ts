import { Component } from '@angular/core';

@Component({
  selector: 'app-productllist',
  templateUrl: './productllist.component.html',
  styleUrl: './productllist.component.css'
})
export class ProductllistComponent {
  productList: string[] = ["candies", "canned food"];
  product: string = '';

  addProduct() {
    this.productList.push(this.product);
  }
}
