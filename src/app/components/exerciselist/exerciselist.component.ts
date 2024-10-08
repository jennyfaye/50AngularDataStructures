import { ExerciselistService } from './../../services/exerciselist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrl: './exerciselist.component.css'
})
export class ExerciselistComponent {
  exerciseList: string[] = [];
  exercise: string = '';

  constructor(private exerciselistService: ExerciselistService){
  }

  ngOnInit(): void {
    this.exerciseList = this.exerciselistService.getExercise();
  }

  addExercise(): void {
    this.exerciselistService.addExercise(this.exercise);
    this.exercise = '';
  }

  updateExercise(index: number): void {
    const currentName = this.exerciseList[index];
    const newName = prompt('Enter new exercise:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.exerciselistService.updateExercise(index, newName.trim());
    }
  }

  deleteExercise(index: number): void {
    this.exerciselistService.deleteExercise(index);
  }
}
