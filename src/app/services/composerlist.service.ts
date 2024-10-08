import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComposerlistService {
  private composerList: string[] = ["Beethoven", "Mozart"];

  getComposer(): string[]{
    return this.composerList;
  }
  addComposer(composer: string): void{
    this.composerList.push(composer);
  }
  updateComposer(index: number, composer: string): void {
    if (index >= 0 && index < this.composerList.length) {
      this.composerList[index] = composer;
    }
  }
  deleteComposer(index: number): void {
    if (index >= 0 && index < this.composerList.length) {
      this.composerList.splice(index, 1);
    }
  }
}
