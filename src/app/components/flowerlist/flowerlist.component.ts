import { FlowerlistService } from './../../services/flowerlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent {
  flowerList: string[] = [];
  flower: string = '';

  constructor(private flowerlistService: FlowerlistService){
  }

  ngOnInit(): void {
    this.flowerList = this.flowerlistService.getFlower();
  }

  addFlower(): void {
    this.flowerlistService.addFlower(this.flower);
    this.flower = '';
  }

  updateFlower(index: number): void {
    const currentName = this.flowerList[index];
    const newName = prompt('Enter new flower:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.flowerlistService.updateFlower(index, newName.trim());
    }
  }

  deleteFlower(index: number): void {
    this.flowerlistService.deleteFlower(index);
  }
}
