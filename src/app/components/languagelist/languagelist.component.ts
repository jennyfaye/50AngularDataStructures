import { Component } from '@angular/core';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css'
})
export class LanguagelistComponent {
  languageList: string[] = ["C++", "C#"];
  language: string = '';

  addLanguage() {
    this.languageList.push(this.language);
  }
}
