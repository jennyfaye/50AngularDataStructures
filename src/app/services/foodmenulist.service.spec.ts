import { TestBed } from '@angular/core/testing';

import { FoodmenulistService } from './foodmenulist.service';

describe('FoodmenulistService', () => {
  let service: FoodmenulistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodmenulistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
