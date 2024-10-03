import { Component } from '@angular/core';

@Component({
  selector: 'app-accessorylist',
  templateUrl: './accessorylist.component.html',
  styleUrl: './accessorylist.component.css'
})
export class AccessorylistComponent {
  accessoryList: string[] = ["phonecase","popsocket"];
  accessory: string = '';

  addAccessory() {
    this.accessoryList.push(this.accessory);
  }
}
