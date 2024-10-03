import { Component } from '@angular/core';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrl: './exerciselist.component.css'
})
export class ExerciselistComponent {
  exerciseList: string[] = ["squats", "lunges"];
  exercise: string = '';

  addExercise() {
    this.exerciseList.push(this.exercise);
  }
}
