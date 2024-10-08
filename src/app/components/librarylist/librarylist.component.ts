import { LibrarylistService } from './../../services/librarylist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrl: './librarylist.component.css'
})
export class LibrarylistComponent {
  libraryList: string[] = [];
  library: string = '';
  constructor(private librarylistService: LibrarylistService){
  }

  ngOnInit(): void {
    this.libraryList = this.librarylistService.getLibrary();
  }

  addLibrary(): void {
    this.librarylistService.addLibrary(this.library);
    this.library = '';
  }

  updateLibrary(index: number): void {
    const currentName = this.libraryList[index];
    const newName = prompt('Enter new library:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.librarylistService.updateLibrary(index, newName.trim());
    }
  }

  deleteLibrary(index: number): void {
    this.librarylistService.deleteLibrary(index);
  }
}
