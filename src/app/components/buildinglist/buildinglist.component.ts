import { BuildinglistService } from './../../services/buildinglist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {
  buildingList: string[] = [];
  building: string = '';

  constructor(private buildinglistService: BuildinglistService){
  }

  ngOnInit(): void {
    this.buildingList = this.buildinglistService.getBuilding();
  }

  addBuilding(): void {
    this.buildinglistService.addBuilding(this.building);
    this.building = '';
  }

  updateBuilding(index: number): void {
    const currentName = this.buildingList[index];
    const newName = prompt('Enter new building:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.buildinglistService.updateBuilding(index, newName.trim());
    }
  }

  deleteBuilding(index: number): void {
    this.buildinglistService.deleteBuilding(index);
  }
}
