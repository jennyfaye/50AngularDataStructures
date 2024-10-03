import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrl: './tvshowlist.component.css'
})
export class TvshowlistComponent {
  showList: string[] = ["It's Showtime", "Kapuso Mo, Jessica Soho (KMJS)"];
  show: string = '';

  addShow() {
    this.showList.push(this.show);
  }
}
