import { Component, Input } from '@angular/core';
import { Luxury } from 'src/app/models/luxury';

@Component({
  selector: 'app-luxury',
  templateUrl: './luxury.component.html',
  styleUrls: ['./luxury.component.css'],
})
export class LuxuryComponent {
  @Input() luxuries!: Luxury[];
}
