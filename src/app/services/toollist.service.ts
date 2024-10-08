import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToollistService {
  private toolList: string[] = ["screwdrivers", "wrenches"];

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
