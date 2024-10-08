import { LanguagelistService } from './../../services/languagelist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css'
})
export class LanguagelistComponent {
  languageList: string[] = [];
  language: string = '';

  constructor(private languagelistService: LanguagelistService){
  }

  ngOnInit(): void {
    this.languageList = this.languagelistService.getLanguage();
  }

  addLanguage(): void {
    this.languagelistService.addLanguage(this.language);
    this.language = '';
  }

  updateLanguage(index: number): void {
    const currentName = this.languageList[index];
    const newName = prompt('Enter new programming language:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.languagelistService.updateLanguage(index, newName.trim());
    }
  }

  deleteLanguage(index: number): void {
    this.languagelistService.deleteLanguage(index);
  }
}
