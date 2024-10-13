import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css'],
})
export class TestimonialCardComponent {
  @Input() name!: string;
  @Input() image!: string;
  @Input() comments!: string;
  @Input() rating!: number;

  // Create an array to map the number of stars
  get stars(): number[] {
    return Array(this.rating).fill(0);
  }
}
