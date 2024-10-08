import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciselistService {
  private exerciseList: string[] = ["squats", "lunges"];

  getExercise(): string[]{
    return this.exerciseList;
  }
  addExercise(exercise: string): void{
    this.exerciseList.push(exercise);
  }
  updateExercise(index: number, exercise: string): void {
    if (index >= 0 && index < this.exerciseList.length) {
      this.exerciseList[index] = exercise;
    }
  }
  deleteExercise(index: number): void {
    if (index >= 0 && index < this.exerciseList.length) {
      this.exerciseList.splice(index, 1);
    }
  }
}
