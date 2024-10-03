import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworklist',
  templateUrl: './frameworklist.component.html',
  styleUrl: './frameworklist.component.css'
})
export class FrameworklistComponent {
  frameworkList: string[] = ["Angular", "Bootstrap"];
  framework: string = '';

  addFramework() {
    this.frameworkList.push(this.framework);
  }
}
