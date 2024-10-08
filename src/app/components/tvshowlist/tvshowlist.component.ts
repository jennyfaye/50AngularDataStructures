import { TvshowlistService } from './../../services/tvshowlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrl: './tvshowlist.component.css'
})
export class TvshowlistComponent {
  showList: string[] = [];
  show: string = '';

  constructor(private tvshowlistService: TvshowlistService){
  }

  ngOnInit(): void {
    this.showList = this.tvshowlistService.getShow();
  }

  addShow(): void {
    this.tvshowlistService.addShow(this.show);
    this.show = '';
  }

  updateShow(index: number): void {
    const currentName = this.showList[index];
    const newName = prompt('Enter new tv show:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.tvshowlistService.updateShow(index, newName.trim());
    }
  }

  deleteShow(index: number): void {
    this.tvshowlistService.deleteShow(index);
  }
}
