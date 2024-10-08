import { TestBed } from '@angular/core/testing';

import { LaptopspeclistService } from './laptopspeclist.service';

describe('LaptopspeclistService', () => {
  let service: LaptopspeclistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopspeclistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
