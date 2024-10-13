import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clickable-tile',
  templateUrl: './clickable-tile.component.html',
  styleUrls: ['./clickable-tile.component.css'],
})
export class ClickableTileComponent {
  @Input() imageUrl: string = ''; // Image for the tile
  @Input() hoverImageUrl: string = ''; // Image for the hover effect
  @Input() hoverText: String = '';
  isHovered = false;
  constructor(private route: Router) {}
  onClick() {
    console.log('Tile clicked!');
    if (this.hoverText === 'AeroCity') {
      this.route.navigate(['aerocity']);
    }
  }
}
