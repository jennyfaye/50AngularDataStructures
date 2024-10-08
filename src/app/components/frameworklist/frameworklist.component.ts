import { FrameworklistService } from './../../services/frameworklist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworklist',
  templateUrl: './frameworklist.component.html',
  styleUrl: './frameworklist.component.css'
})
export class FrameworklistComponent {
  frameworkList: string[] = ["Angular", "Bootstrap"];
  framework: string = '';

  constructor(private frameworklistService: FrameworklistService){
  }

  ngOnInit(): void {
    this.frameworkList = this.frameworklistService.getFramework();
  }

  addFramework(): void {
    this.frameworklistService.addFramework(this.framework);
    this.framework = '';
  }

  updateFramework(index: number): void {
    const currentName = this.frameworkList[index];
    const newName = prompt('Enter new framework:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.frameworklistService.updateFramework(index, newName.trim());
    }
  }

  deleteFramework(index: number): void {
    this.frameworklistService.deleteFramework(index);
  }
}
