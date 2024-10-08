import { ComputerhardwarelistService } from './../../services/computerhardwarelist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent {
  hardwareList: string[] = [];
  hardware: string = '';

  constructor(private computerhardwarelistService: ComputerhardwarelistService){
  }

  ngOnInit(): void {
    this.hardwareList = this.computerhardwarelistService.getHardware();
  }

  addHardware(): void {
    this.computerhardwarelistService.addHardware(this.hardware);
    this.hardware = '';
  }

  updateHardware(index: number): void {
    const currentName = this.hardwareList[index];
    const newName = prompt('Enter new computer hardware:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.computerhardwarelistService.updateHardware(index, newName.trim());
    }
  }

  deleteHardware(index: number): void {
    this.computerhardwarelistService.deleteHardware(index);
  }
}
