import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  bookList: string[] = ["Noli Me Tangere", "El filibusterismo" ];
  book: string = '';

  addBook() {
    this.bookList.push(this.book);
  }
}
