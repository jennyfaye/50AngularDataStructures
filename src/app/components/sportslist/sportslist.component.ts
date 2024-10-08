import { SportslistService } from './../../services/sportslist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sportslist',
  templateUrl: './sportslist.component.html',
  styleUrl: './sportslist.component.css'
})
export class SportslistComponent {
  sportList: string[] = ["Archery", "Swimming"];
  sport: string = '';

  constructor(private sportslistService: SportslistService){
  }

  ngOnInit(): void {
    this.sportList = this.sportslistService.getSport();
  }

  addSport(): void {
    this.sportslistService.addSport(this.sport);
    this.sport = '';
  }

  updateSport(index: number): void {
    const currentName = this.sportList[index];
    const newName = prompt('Enter new sport:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.sportslistService.updateSport(index, newName.trim());
    }
  }

  deleteSport(index: number): void {
    this.sportslistService.deleteSport(index);
  }
}
