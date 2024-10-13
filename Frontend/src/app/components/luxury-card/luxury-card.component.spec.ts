import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryCardComponent } from './luxury-card.component';

describe('LuxuryCardComponent', () => {
  let component: LuxuryCardComponent;
  let fixture: ComponentFixture<LuxuryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuxuryCardComponent]
    });
    fixture = TestBed.createComponent(LuxuryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
