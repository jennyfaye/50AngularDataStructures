import { DestinationlistService } from './../../services/destinationlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destinationlist',
  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent {
  destinationList: string[] = [];
  destination: string = '';

  constructor(private destinationlistService: DestinationlistService){
  }

  ngOnInit(): void {
    this.destinationList = this.destinationlistService.getDestination();
  }

  addDestination(): void {
    this.destinationlistService.addDestination(this.destination);
    this.destination = '';
  }

  updateDestination(index: number): void {
    const currentName = this.destinationList[index];
    const newName = prompt('Enter new destination:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.destinationlistService.updateDestination(index, newName.trim());
    }
  }

  deleteDestination(index: number): void {
    this.destinationlistService.deleteDestination(index);
  }
}
