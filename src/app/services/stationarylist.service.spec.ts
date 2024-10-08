import { TestBed } from '@angular/core/testing';

import { StationarylistService } from './stationarylist.service';

describe('StationarylistService', () => {
  let service: StationarylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationarylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
