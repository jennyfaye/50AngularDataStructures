import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentationlistService {
  private presentationList: string[] = ["angular directives","angular pipe"];

  getPresentation(): string[]{
    return this.presentationList;
  }
  addPresentation(presentation: string): void{
    this.presentationList.push(presentation);
  }
  updatePresentation(index: number, presentation: string): void {
    if (index >= 0 && index < this.presentationList.length) {
      this.presentationList[index] = presentation;
    }
  }
  deletePresentation(index: number): void {
    if (index >= 0 && index < this.presentationList.length) {
      this.presentationList.splice(index, 1);
    }
  }
}
