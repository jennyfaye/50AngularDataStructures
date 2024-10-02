import { Component } from '@angular/core';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {
  toolList: string[] = ["screwdrivers", "wrenches"];
  tool: string = '';

  addTool() {
    this.toolList.push(this.tool);
  }
}
