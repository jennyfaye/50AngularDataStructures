import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductllistComponent } from './productllist.component';

describe('ProductllistComponent', () => {
  let component: ProductllistComponent;
  let fixture: ComponentFixture<ProductllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductllistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
