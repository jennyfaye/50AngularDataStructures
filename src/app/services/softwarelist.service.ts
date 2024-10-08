import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftwarelistService {
  private softwareList: string[] = ["Microsoft Edge", "Zoom"];

  getSoftware(): string[]{
    return this.softwareList;
  }
  addSoftware(software: string): void{
    this.softwareList.push(software);
  }
  updateSoftware(index: number, software: string): void {
    if (index >= 0 && index < this.softwareList.length) {
      this.softwareList[index] = software;
    }
  }
  deleteSoftware(index: number): void {
    if (index >= 0 && index < this.softwareList.length) {
      this.softwareList.splice(index, 1);
    }
  }
}
