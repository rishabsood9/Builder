import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
  animations: [
    trigger('buttonAnimation', [
      state('idle', style({ transform: 'scale(1)' })),
      state('hover', style({ transform: 'scale(1.15)' })), // Scale increased to 1.15
      transition('idle <=> hover', animate('300ms ease-in-out')), // Smooth transition
    ]),
  ],
})
export class BtnComponent {
  constructor() {}

  @Input() btnName!: string;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() btnStyle = { bgColor: '#f8f8f8', color: '#333' };
  buttonState = 'idle';

  onClick(): void {
    this.clickEvent.emit();
  }

  onMouseEnter(): void {
    this.buttonState = 'hover'; // On hover, scale to 1.15
  }

  onMouseLeave(): void {
    this.buttonState = 'idle'; // On hover exit, back to normal
  }
}
