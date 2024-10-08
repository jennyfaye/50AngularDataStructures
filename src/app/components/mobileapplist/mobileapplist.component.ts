import { MobileapplistService } from './../../services/mobileapplist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobileapplist',
  templateUrl: './mobileapplist.component.html',
  styleUrl: './mobileapplist.component.css'
})
export class MobileapplistComponent {
  appsList: string[] = ["Facebook", "Instagram"];
  apps: string = '';

  constructor(private mobileapplistService: MobileapplistService){
  }

  ngOnInit(): void {
    this.appsList = this.mobileapplistService.getApp();
  }

  addApp(): void {
    this.mobileapplistService.addApp(this.apps);
    this.apps = '';
  }

  updateApp(index: number): void {
    const currentName = this.appsList[index];
    const newName = prompt('Enter new mobile apps:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.mobileapplistService.updateApp(index, newName.trim());
    }
  }

  deleteApp(index: number): void {
    this.mobileapplistService.deleteApp(index);
  }
}
