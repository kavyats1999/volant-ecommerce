import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysGirlsComponent } from './boys-girls.component';

describe('BoysGirlsComponent', () => {
  let component: BoysGirlsComponent;
  let fixture: ComponentFixture<BoysGirlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoysGirlsComponent]
    });
    fixture = TestBed.createComponent(BoysGirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
