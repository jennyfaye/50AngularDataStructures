import { ToollistService } from './../../services/toollist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {
  toolList: string[] = [];
  tool: string = '';

  constructor(private toollistService: ToollistService){
  }

  ngOnInit(): void {
    this.toolList = this.toollistService.getTool();
  }

  addTool(): void {
    this.toollistService.addTool(this.tool);
    this.tool = '';
  }

  updateTool(index: number): void {
    const currentName = this.toolList[index];
    const newName = prompt('Enter new tool:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.toollistService.updateTool(index, newName.trim());
    }
  }

  deleteTool(index: number): void {
    this.toollistService.deleteTool(index);
  }
}
