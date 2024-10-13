import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  copyMessage: string | null = null;
  constructor() {}

  ngOnInit(): void {
    this.onScroll(); // To check initial scroll position
    // Reset the copy message after a short delay
    setTimeout(() => {
      this.copyMessage = null;
    }, 3000);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const welcomeContainer = document.querySelector('.welcome-container');
    if (welcomeContainer) {
      const rect = welcomeContainer.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        welcomeContainer.classList.add('in-view');
      } else {
        welcomeContainer.classList.remove('in-view');
      }
    }
  }

  copyPhoneNumber(): void {
    const phoneNumber = '+91-9999999999';
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // On mobile, redirect to WhatsApp or dialer
      window.location.href = `https://wa.me/919999999999?text=Hello%20I%20have%20a%20query%20regarding%20your%20real%20estate%20offerings`;
    } else {
      // On desktop, copy the number to the clipboard and show the message
      navigator.clipboard.writeText(phoneNumber).then(
        () => {
          this.copyMessage = `${phoneNumber} has been copied to the clipboard.`;
        },
        () => {
          this.copyMessage = 'Failed to copy phone number.';
        }
      );
    }
  }
}
