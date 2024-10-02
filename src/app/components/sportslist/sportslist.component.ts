import { Component } from '@angular/core';

@Component({
  selector: 'app-sportslist',
  templateUrl: './sportslist.component.html',
  styleUrl: './sportslist.component.css'
})
export class SportslistComponent {
  sportList: string[] = ["Archery", "Swimming"];
  sport: string = '';

  addSport() {
    this.sportList.push(this.sport);
  }
}
