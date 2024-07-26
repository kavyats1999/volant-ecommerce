import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenProductsComponent } from './view-children-products.component';

describe('ViewChildrenProductsComponent', () => {
  let component: ViewChildrenProductsComponent;
  let fixture: ComponentFixture<ViewChildrenProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChildrenProductsComponent]
    });
    fixture = TestBed.createComponent(ViewChildrenProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
