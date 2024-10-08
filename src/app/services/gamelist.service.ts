import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamelistService {
  private gameList: string[] = ["Plants vs. Zombies", "Overwatch"];

  getGame(): string[]{
    return this.gameList;
  }
  addGame(game: string): void{
    this.gameList.push(game);
  }
  updateGame(index: number, game: string): void {
    if (index >= 0 && index < this.gameList.length) {
      this.gameList[index] = game;
    }
  }
  deleteGame(index: number): void {
    if (index >= 0 && index < this.gameList.length) {
      this.gameList.splice(index, 1);
    }
  }
}
