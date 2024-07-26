import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GentsComponent } from './gents.component';

describe('GentsComponent', () => {
  let component: GentsComponent;
  let fixture: ComponentFixture<GentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GentsComponent]
    });
    fixture = TestBed.createComponent(GentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
