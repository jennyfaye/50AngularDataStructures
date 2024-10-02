import { Component } from '@angular/core';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {
  animalList: string[] = ["Elephant", "Girrafe"];
  animal: string = '';

  addAnimal() {
    this.animalList.push(this.animal);
  }
}
