import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent {
  hardwareList: string[] = ["Central Processing Unit", "Motherboard"];
  hardware: string = '';

  addHardware() {
    this.hardwareList.push(this.hardware);
  }
}
