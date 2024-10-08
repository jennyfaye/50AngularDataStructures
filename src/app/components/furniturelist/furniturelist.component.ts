import { FurniturelistService } from './../../services/furniturelist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrl: './furniturelist.component.css'
})
export class FurniturelistComponent {
  furnitureList: string[] = [];
  furniture: string = '';

  constructor(private furniturelistService: FurniturelistService){
  }

  ngOnInit(): void {
    this.furnitureList = this.furniturelistService.getFurniture();
  }

  addFurniture(): void {
    this.furniturelistService.addFurniture(this.furniture);
    this.furniture = '';
  }

  updateFurniture(index: number): void {
    const currentName = this.furnitureList[index];
    const newName = prompt('Enter new furniture:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.furniturelistService.updateFurniture(index, newName.trim());
    }
  }

  deleteFurniture(index: number): void {
    this.furniturelistService.deleteFurniture(index);
  }
}
