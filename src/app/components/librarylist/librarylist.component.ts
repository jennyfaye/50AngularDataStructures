import { Component } from '@angular/core';

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrl: './librarylist.component.css'
})
export class LibrarylistComponent {
  libraryList: string[] = ["ReactJS", "Vue.js"];
  library: string = '';

  addLibrary() {
    this.libraryList.push(this.library);
  }
}
