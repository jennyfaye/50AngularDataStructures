import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaintinglistService {
  private paintingList: string[] = ["Mona Lisa", "Starry Night"];

  getPainting(): string[]{
    return this.paintingList;
  }
  addPainting(painting: string): void{
    this.paintingList.push(painting);
  }
  updatePainting(index: number, painting: string): void {
    if (index >= 0 && index < this.paintingList.length) {
      this.paintingList[index] = painting;
    }
  }
  deletePainting(index: number): void {
    if (index >= 0 && index < this.paintingList.length) {
      this.paintingList.splice(index, 1);
    }
  }
}
