import { SoftwarelistService } from './../../services/softwarelist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent {
  softwareList: string[] = [];
  software: string = '';

  constructor(private softwarelistService: SoftwarelistService){
  }

  ngOnInit(): void {
    this.softwareList = this.softwarelistService.getSoftware();
  }

  addSoftware(): void {
    this.softwarelistService.addSoftware(this.software);
    this.software = '';
  }

  updateSoftware(index: number): void {
    const currentName = this.softwareList[index];
    const newName = prompt('Enter new software:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.softwarelistService.updateSoftware(index, newName.trim());
    }
  }

  deleteSoftware(index: number): void {
    this.softwarelistService.deleteSoftware(index);
  }
}
