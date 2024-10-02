import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  fruitList: string[] = ["apple", "mango"];
  fruit: string = '';

  addFruit() {
    this.fruitList.push(this.fruit);
  }
}
