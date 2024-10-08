import { LaptoplistService } from './../../services/laptoplist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent {
  laptopList: string[] = [];
  laptop: string = '';

  constructor(private laptoplistService: LaptoplistService){
  }

  ngOnInit(): void {
    this.laptopList = this.laptoplistService.getLaptop();
  }

  addLaptop(): void {
    this.laptoplistService.addLaptop(this.laptop);
    this.laptop = '';
  }

  updateLaptop(index: number): void {
    const currentName = this.laptopList[index];
    const newName = prompt('Enter new laptop model:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.laptoplistService.updateLaptop(index, newName.trim());
    }
  }

  deleteLaptop(index: number): void {
    this.laptoplistService.deleteLaptop(index);
  }
}
