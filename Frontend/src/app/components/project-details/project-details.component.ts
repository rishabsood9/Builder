import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Luxury } from 'src/app/models/luxury';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent {
  @Input() aboutInfo: string = '';
  @Input() projectTitle: string = '';
  @Input() iframeUrl!: string;
  @Input() projectDescription!: string;
  @Input() projectDetails!: { [key: string]: string };
  @Input() extraInfo!: string;
  @Input() testimonials!: { comment: string }[];
  @Input() nearbyPlaces!: { [category: string]: string[] };
  @Input() constructionPics!: string[];
  @Input() themeClass!: string;
  @Input() luxuries!: Luxury[];

  imageUrls: string[] = [
    '../../assets/GoldenTemple.jpg',
    '../../assets/AeroCity.jpg',
    '../../assets/Virsa.jpg',
  ];

  selectedPic!: string;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openModal(pic: string) {
    this.selectedPic = pic;
  }

  closeModal() {
    this.selectedPic = 'null';
  }

  moveLeft() {
    // Move to the previous image
  }

  moveRight() {
    // Move to the next image
  }
}
