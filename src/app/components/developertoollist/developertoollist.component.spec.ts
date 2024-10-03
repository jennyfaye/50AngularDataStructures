import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopertoollistComponent } from './developertoollist.component';

describe('DevelopertoollistComponent', () => {
  let component: DevelopertoollistComponent;
  let fixture: ComponentFixture<DevelopertoollistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopertoollistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopertoollistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
