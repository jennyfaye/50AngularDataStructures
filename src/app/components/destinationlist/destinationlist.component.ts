import { Component } from '@angular/core';

@Component({
  selector: 'app-destinationlist',
  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent {
  destinationList: string[] = ["Tokyo, Japan", "Paris, France"];
  destination: string = '';

  addDestination() {
    this.destinationList.push(this.destination);
  }
}
