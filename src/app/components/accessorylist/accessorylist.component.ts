import { AccessorylistService } from './../../services/accessorylist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accessorylist',
  templateUrl: './accessorylist.component.html',
  styleUrl: './accessorylist.component.css'
})
export class AccessorylistComponent {
  accessoryList: string[] = [];
  accessory: string = '';

  constructor(private accessorylistService: AccessorylistService){
  }

  ngOnInit(): void {
    this.accessoryList = this.accessorylistService.getAccessory();
  }

  addAccessory(): void {
    this.accessorylistService.addAccessory(this.accessory);
    this.accessory = '';
  }

  updateAccessory(index: number): void {
    const currentName = this.accessoryList[index];
    const newName = prompt('Enter new accessory:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.accessorylistService.updateAccessory(index, newName.trim());
    }
  }

  deleteAccessory(index: number): void {
    this.accessorylistService.deleteAccessory(index);
  }
}
