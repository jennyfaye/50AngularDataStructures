import { Component } from '@angular/core';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent {
  softwareList: string[] = ["Microsoft Edge", "Zoom"];
  software: string = '';

  addSoftware() {
    this.softwareList.push(this.software);
  }
}
