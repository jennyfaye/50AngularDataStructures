import { Component } from '@angular/core';

@Component({
  selector: 'app-mobileapplist',
  templateUrl: './mobileapplist.component.html',
  styleUrl: './mobileapplist.component.css'
})
export class MobileapplistComponent {
  appsList: string[] = ["Facebook", "Instagram"];
  apps: string = '';

  addApp() {
    this.appsList.push(this.apps);
  }
}
