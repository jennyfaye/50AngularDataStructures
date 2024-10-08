import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagelistService {
  private languageList: string[] = ["C++", "C#"];

  getLanguage(): string[]{
    return this.languageList;
  }
  addLanguage(language: string): void{
    this.languageList.push(language);
  }
  updateLanguage(index: number, language: string): void {
    if (index >= 0 && index < this.languageList.length) {
      this.languageList[index] = language;
    }
  }
  deleteLanguage(index: number): void {
    if (index >= 0 && index < this.languageList.length) {
      this.languageList.splice(index, 1);
    }
  }
}
