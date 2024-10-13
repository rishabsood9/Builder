import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryComponent } from './luxury.component';

describe('LuxuryComponent', () => {
  let component: LuxuryComponent;
  let fixture: ComponentFixture<LuxuryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuxuryComponent]
    });
    fixture = TestBed.createComponent(LuxuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
