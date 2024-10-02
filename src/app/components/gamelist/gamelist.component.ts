import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  gameList: string[] = ["Plants vs. Zombies", "Overwatch"];
  game: string = '';

  addGame() {
    this.gameList.push(this.game);
  }
}
