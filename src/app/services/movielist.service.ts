import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {
  private  movieList: string[] = ["Despicable Me 4", "Inside Out 2"];

  getMovie(): string[]{
    return this.movieList;
  }
  addMovie(movie: string): void{
    this.movieList.push(movie);
  }
  updateMovie(index: number, movie: string): void {
    if (index >= 0 && index < this.movieList.length) {
      this.movieList[index] = movie;
    }
  }
  deleteMovie(index: number): void {
    if (index >= 0 && index < this.movieList.length) {
      this.movieList.splice(index, 1);
    }
  }
}
