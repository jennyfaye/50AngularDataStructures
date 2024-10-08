import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildinglistService {

  private buildingList: string[] = ["Library", "Laboratories"];

  getBuilding(): string[]{
    return this.buildingList;
  }
  addBuilding(building: string): void{
    this.buildingList.push(building);
  }
  updateBuilding(index: number, building: string): void {
    if (index >= 0 && index < this.buildingList.length) {
      this.buildingList[index] = building;
    }
  }
  deleteBuilding(index: number): void {
    if (index >= 0 && index < this.buildingList.length) {
      this.buildingList.splice(index, 1);
    }
  }
}
