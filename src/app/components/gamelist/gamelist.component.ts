import { GamelistService } from './../../services/gamelist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  gameList: string[] = [];
  game: string = '';

  constructor(private gamelistService: GamelistService){
  }

  ngOnInit(): void {
    this.gameList = this.gamelistService.getGame();
  }

  addGame(): void {
    this.gamelistService.addGame(this.game);
    this.game = '';
  }

  updateGame(index: number): void {
    const currentName = this.gameList[index];
    const newName = prompt('Enter new game:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.gamelistService.updateGame(index, newName.trim());
    }
  }

  deleteGame(index: number): void {
    this.gamelistService.deleteGame(index);
  }
}
