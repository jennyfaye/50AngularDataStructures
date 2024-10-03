import { Component, OnInit } from '@angular/core';
import { LaptopSpec } from './laptopspec';

@Component({
  selector: 'app-laptopspeclist',
  templateUrl: './laptopspeclist.component.html',
  styleUrl: './laptopspeclist.component.css'
})
export class LaptopspeclistComponent implements OnInit{
  specList: LaptopSpec[] = [];
  processor: string = '';
  ram: number = 0;
  os: string = '';

  ngOnInit() {
  }

  addSpec() {
    const newSpec: LaptopSpec = {
      specList: '',
      processor: this.processor,
      ram: this.ram,
      os: this.os
    };

    this.specList.push(newSpec);
  }
}
