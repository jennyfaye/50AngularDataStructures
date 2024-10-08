import { AnimallistService } from './../../services/animallist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {
  animalList: string[] = [];
  animal: string = '';

  constructor(private animallistService: AnimallistService){
  }

  ngOnInit(): void {
    this.animalList = this.animallistService.getAnimal();
  }

  addAnimal(): void {
    this.animallistService.addAnimal(this.animal);
    this.animal = '';
  }

  updateAnimal(index: number): void {
    const currentName = this.animalList[index];
    const newName = prompt('Enter new animal:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.animallistService.updateAnimal(index, newName.trim());
    }
  }

  deleteAnimal(index: number): void {
    this.animallistService.deleteAnimal(index);
  }
}
