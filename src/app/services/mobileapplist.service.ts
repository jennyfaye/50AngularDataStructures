import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileapplistService {
  private appsList: string[] = ["Facebook", "Instagram"];

  getApp(): string[]{
    return this.appsList;
  }
  addApp(apps: string): void{
    this.appsList.push(apps);
  }
  updateApp(index: number, apps: string): void {
    if (index >= 0 && index < this.appsList.length) {
      this.appsList[index] = apps;
    }
  }
  deleteApp(index: number): void {
    if (index >= 0 && index < this.appsList.length) {
      this.appsList.splice(index, 1);
    }
  }
}
