import { VegetablelistService } from './../../services/vegetablelist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetablelist',
  templateUrl: './vegetablelist.component.html',
  styleUrl: './vegetablelist.component.css'
})
export class VegetablelistComponent {
  vegetableList: string[] = ["cabbage", "lettuce"];
  vegetable: string = '';

  constructor(private vegetablelistService: VegetablelistService){
  }

  ngOnInit(): void {
    this.vegetableList = this.vegetablelistService.getVegetable();
  }

  addVegetable(): void {
    this.vegetablelistService.addVegetable(this.vegetable);
    this.vegetable = '';
  }

  updateVegetable(index: number): void {
    const currentName = this.vegetableList[index];
    const newName = prompt('Enter new vegetable:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.vegetablelistService.updateVegetable(index, newName.trim());
    }
  }

  deleteVegetable(index: number): void {
    this.vegetablelistService.deleteVegetable(index);
  }
}
