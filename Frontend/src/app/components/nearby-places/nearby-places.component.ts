import { Component, Input } from '@angular/core';
import { faHospital, faGraduationCap, faShoppingCart, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nearby-places',
  templateUrl: './nearby-places.component.html',
  styleUrls: ['./nearby-places.component.scss']
})
export class NearbyPlacesComponent {
  @Input() nearbyPlaces!: { [key: string]: string[] };

  // FontAwesome icons
  faHospital = faHospital;
  faGraduationCap = faGraduationCap;
  faShoppingCart = faShoppingCart;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  // Initially, all sections are collapsed
  openSection: string | null = null;

  // Toggle the open/close state of a section and collapse others
  toggleSection(category: string): void {
    this.openSection = this.openSection === category ? null : category;
  }

  // Check if the section is open
  isSectionOpen(category: string): boolean {
    return this.openSection === category;
  }
}
