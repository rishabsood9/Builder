import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquireNowComponent } from './enquire-now.component';

describe('EnquireNowComponent', () => {
  let component: EnquireNowComponent;
  let fixture: ComponentFixture<EnquireNowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquireNowComponent]
    });
    fixture = TestBed.createComponent(EnquireNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
