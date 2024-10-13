import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroCityComponent } from './aero-city.component';

describe('AeroCityComponent', () => {
  let component: AeroCityComponent;
  let fixture: ComponentFixture<AeroCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AeroCityComponent]
    });
    fixture = TestBed.createComponent(AeroCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
