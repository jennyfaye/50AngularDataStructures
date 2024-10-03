import { Component } from '@angular/core';

@Component({
  selector: 'app-developertoollist',
  templateUrl: './developertoollist.component.html',
  styleUrl: './developertoollist.component.css'
})
export class DevelopertoollistComponent {
  toolList: string[] = ["Version Control Systems", "Integrated Development Environments (IDEs)"];
  tool: string = '';

  addTool() {
    this.toolList.push(this.tool);
  }
}
