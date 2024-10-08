import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputerhardwarelistService {
  private hardwareList: string[] = ["Central Processing Unit", "Motherboard"];

  getHardware(): string[]{
    return this.hardwareList;
  }
  addHardware(hardware: string): void{
    this.hardwareList.push(hardware);
  }
  updateHardware(index: number, hardware: string): void {
    if (index >= 0 && index < this.hardwareList.length) {
      this.hardwareList[index] = hardware;
    }
  }
  deleteHardware(index: number): void {
    if (index >= 0 && index < this.hardwareList.length) {
      this.hardwareList.splice(index, 1);
    }
  }
}
