import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimallistService {
  private animalList: string[] = ["Elephant", "Girrafe"];

  getAnimal(): string[]{
    return this.animalList;
  }
  addAnimal(animal: string): void{
    this.animalList.push(animal);
  }
  updateAnimal(index: number, animal: string): void {
    if (index >= 0 && index < this.animalList.length) {
      this.animalList[index] = animal;
    }
  }
  deleteAnimal(index: number): void {
    if (index >= 0 && index < this.animalList.length) {
      this.animalList.splice(index, 1);
    }
  }
}
