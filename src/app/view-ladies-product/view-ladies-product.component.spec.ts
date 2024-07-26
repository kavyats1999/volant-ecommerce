import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLadiesProductComponent } from './view-ladies-product.component';

describe('ViewLadiesProductComponent', () => {
  let component: ViewLadiesProductComponent;
  let fixture: ComponentFixture<ViewLadiesProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLadiesProductComponent]
    });
    fixture = TestBed.createComponent(ViewLadiesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
