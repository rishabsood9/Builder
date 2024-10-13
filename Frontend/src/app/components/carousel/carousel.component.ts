import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  currentIndex: number = 0;
  intervalId: any;
  isPaused: boolean = false; // Flag to pause and resume sliding

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.nextImage();
      }
    }, 3000);
  }

  clearAutoSlide(): void {
    clearInterval(this.intervalId);
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  // Stop auto-sliding when hovering or clicking a button
  pauseSlide(): void {
    this.isPaused = true;
  }

  // Resume auto-sliding when not hovering or clicking a button
  resumeSlide(): void {
    this.isPaused = false;
  }

  // Hover event listeners
  @HostListener('mouseenter') onMouseEnter() {
    this.pauseSlide();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resumeSlide();
  }
}
