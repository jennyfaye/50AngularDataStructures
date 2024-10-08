import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrameworklistService {
  private frameworkList: string[] = ["Angular", "Bootstrap"];

  getFramework(): string[]{
    return this.frameworkList;
  }
  addFramework(framework: string): void{
    this.frameworkList.push(framework);
  }
  updateFramework(index: number, framework: string): void {
    if (index >= 0 && index < this.frameworkList.length) {
      this.frameworkList[index] = framework;
    }
  }
  deleteFramework(index: number): void {
    if (index >= 0 && index < this.frameworkList.length) {
      this.frameworkList.splice(index, 1);
    }
  }
}
