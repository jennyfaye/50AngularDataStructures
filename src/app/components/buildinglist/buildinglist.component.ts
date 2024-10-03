import { Component } from '@angular/core';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {
  buildingList: string[] = ["Library", "Laboratories"];
  building: string = '';

  addBuilding() {
    this.buildingList.push(this.building);
  }
}
