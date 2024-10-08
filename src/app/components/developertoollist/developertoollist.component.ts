import { DevelopertoollistService } from './../../services/developertoollist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-developertoollist',
  templateUrl: './developertoollist.component.html',
  styleUrl: './developertoollist.component.css'
})
export class DevelopertoollistComponent {
  toolList: string[] = [];
  tool: string = '';
  constructor(private developertoollistService: DevelopertoollistService){
  }

  ngOnInit(): void {
    this.toolList = this.developertoollistService.getTool();
  }

  addTool(): void {
    this.developertoollistService.addTool(this.tool);
    this.tool = '';
  }

  updateTool(index: number): void {
    const currentName = this.toolList[index];
    const newName = prompt('Enter new developer tool:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.developertoollistService.updateTool(index, newName.trim());
    }
  }

  deleteTool(index: number): void {
    this.developertoollistService.deleteTool(index);
  }
}
