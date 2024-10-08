import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrarylistService {
  private libraryList: string[] = ["ReactJS", "Vue.js"];

  getLibrary(): string[]{
    return this.libraryList;
  }
  addLibrary(library: string): void{
    this.libraryList.push(library);
  }
  updateLibrary(index: number, library: string): void {
    if (index >= 0 && index < this.libraryList.length) {
      this.libraryList[index] = library;
    }
  }
  deleteLibrary(index: number): void {
    if (index >= 0 && index < this.libraryList.length) {
      this.libraryList.splice(index, 1);
    }
  }
}
