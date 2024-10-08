import { LaptopspeclistService } from './../../services/laptopspeclist.service';
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

  constructor(private laptopspeclistService: LaptopspeclistService){
  }

  ngOnInit(): void {
    this.specList = this.laptopspeclistService.getSpecs();
  }

  addSpec(): void {
    if (this.processor && this.ram && this.os) {
      const newSpec: LaptopSpec = {
        processor: this.processor,
        ram: this.ram,
        os: this.os,
        specList: ''
      };
      this.laptopspeclistService.addSpec(newSpec);
      this.processor = '';
      this.ram = 0;
      this.os = '';
    }
  }

  updateSpec(index: number): void {
    const currentSpec = this.specList[index];
    const newProcessor = prompt('Enter new processor:', currentSpec.processor);
    const newRam = prompt('Enter new RAM size (GB):', currentSpec.ram.toString());
    const newOs = prompt('Enter new operating system:', currentSpec.os);

    if (newProcessor !== null && newProcessor.trim() !== '' && newRam !== null && newRam.trim() !== '' && newOs !== null && newOs.trim() !== '') {
      this.laptopspeclistService.updateSpec(index, {
        processor: newProcessor.trim(),
        ram: +newRam,
        os: newOs.trim(),
        specList: ''
      });
    }
  }

  deleteSpec(index: number): void {
    this.laptopspeclistService.deleteSpec(index);
  }
}
