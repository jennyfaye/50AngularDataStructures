import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  private productList: string[] = ["candies", "canned food"];

  getProduct(): string[]{
    return this.productList;
  }
  addProduct(product: string): void{
    this.productList.push(product);
  }
  updateProduct(index: number, product: string): void {
    if (index >= 0 && index < this.productList.length) {
      this.productList[index] = product;
    }
  }
  deleteProduct(index: number): void {
    if (index >= 0 && index < this.productList.length) {
      this.productList.splice(index, 1);
    }
  }
}
