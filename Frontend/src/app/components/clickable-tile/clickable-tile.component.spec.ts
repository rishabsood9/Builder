import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableTileComponent } from './clickable-tile.component';

describe('ClickableTileComponent', () => {
  let component: ClickableTileComponent;
  let fixture: ComponentFixture<ClickableTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickableTileComponent]
    });
    fixture = TestBed.createComponent(ClickableTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
