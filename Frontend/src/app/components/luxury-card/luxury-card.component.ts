import { Component, Input } from '@angular/core';
import { Luxury } from 'src/app/models/luxury';

@Component({
  selector: 'app-luxury-card',
  templateUrl: './luxury-card.component.html',
  styleUrls: ['./luxury-card.component.css'],
})
export class LuxuryCardComponent {
  @Input() luxury!: Luxury;
}
