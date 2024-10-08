import { ProductlistService } from './../../services/productlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productllist',
  templateUrl: './productllist.component.html',
  styleUrl: './productllist.component.css'
})
export class ProductllistComponent {
  productList: string[] = [];
  product: string = '';

  constructor(private productlistService: ProductlistService){
  }

  ngOnInit(): void {
    this.productList = this.productlistService.getProduct();
  }

  addProduct(): void {
    this.productlistService.addProduct(this.product);
    this.product = '';
  }

  updateProduct(index: number): void {
    const currentName = this.productList[index];
    const newName = prompt('Enter new product:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.productlistService.updateProduct(index, newName.trim());
    }
  }

  deleteProduct(index: number): void {
    this.productlistService.deleteProduct(index);
  }
}
