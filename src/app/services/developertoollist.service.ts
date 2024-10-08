import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevelopertoollistService {
  private toolList: string[] = ["Version Control Systems", "Integrated Development Environments (IDEs)"];

  getTool(): string[]{
    return this.toolList;
  }
  addTool(tool: string): void{
    this.toolList.push(tool);
  }
  updateTool(index: number, tool: string): void {
    if (index >= 0 && index < this.toolList.length) {
      this.toolList[index] = tool;
    }
  }
  deleteTool(index: number): void {
    if (index >= 0 && index < this.toolList.length) {
      this.toolList.splice(index, 1);
    }
  }
}
