import { PaintinglistService } from './../../services/paintinglist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrl: './paintinglist.component.css'
})
export class PaintinglistComponent {
  paintingList: string[] = [];
  painting: string = '';

  constructor(private paintinglistService: PaintinglistService){
  }

  ngOnInit(): void {
    this.paintingList = this.paintinglistService.getPainting();
  }

  addPainting(): void {
    this.paintinglistService.addPainting(this.painting);
    this.painting = '';
  }

  updatePainting(index: number): void {
    const currentName = this.paintingList[index];
    const newName = prompt('Enter new painting:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.paintinglistService.updatePainting(index, newName.trim());
    }
  }

  deletePainting(index: number): void {
    this.paintinglistService.deletePainting(index);
  }
}
