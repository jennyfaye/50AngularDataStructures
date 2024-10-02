import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationarylistComponent } from './stationarylist.component';

describe('StationarylistComponent', () => {
  let component: StationarylistComponent;
  let fixture: ComponentFixture<StationarylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationarylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationarylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
