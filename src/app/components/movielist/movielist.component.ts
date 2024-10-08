import { MovielistService } from './../../services/movielist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movieList: string[] = [];
  movie: string = '';

  constructor(private movielistService: MovielistService){
  }

  ngOnInit(): void {
    this.movieList = this.movielistService.getMovie();
  }

  addMovie(): void {
    this.movielistService.addMovie(this.movie);
    this.movie = '';
  }

  updateMovie(index: number): void {
    const currentName = this.movieList[index];
    const newName = prompt('Enter new movie title:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.movielistService.updateMovie(index, newName.trim());
    }
  }

  deleteMovie(index: number): void {
    this.movielistService.deleteMovie(index);
  }
}
