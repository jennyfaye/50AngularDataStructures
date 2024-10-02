import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movieList: string[] = ["Despicable Me 4", "Inside Out 2"];
  movie: string = '';

  addMovie() {
    this.movieList.push(this.movie);
  }
}
