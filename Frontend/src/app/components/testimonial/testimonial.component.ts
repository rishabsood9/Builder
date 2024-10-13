import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'John Doe',
      image: '../../assets/john-doe.jpg',
      comments: 'Amazing service! Highly recommend.',
      rating: 5,
    },
    {
      name: 'John Doe',
      image: '../../assets/john-doe.jpg',
      comments: 'Amazing service! Highly recommend.',
      rating: 5,
    },
    {
      name: 'John Doe',
      image: '../../assets/john-doe.jpg',
      comments: 'Amazing service! Highly recommend.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      image: '../../assets/john-doe.jpg',
      comments: 'Very professional and trustworthy.',
      rating: 4,
    },
    {
      name: 'Mike Johnson',
      image: '../../assets/john-doe.jpg',
      comments: 'Great experience working with the team.',
      rating: 5,
    },
    {
      name: 'John Doe',
      image: '../../assets/john-doe.jpg',
      comments: 'Amazing service! Highly recommend.',
      rating: 2,
    },
    {
      name: 'John Doe',
      image: '../../assets/john-doe.jpg',
      comments: 'Amazing service! Highly recommend.',
      rating: 5,
    },
    {
      name: 'John Doe',
      image: '../../assets/john-doe.jpg',
      comments: 'Amazing service! Highly recommend.',
      rating: 5,
    },
  ];
  isModalOpen = false;

  constructor(private http: HttpClient) {
    // Fetch existing testimonials from the server on initialization
    this.fetchTestimonials();
  }

  fetchTestimonials() {
    this.http.get('/api/testimonials').subscribe((data: any) => {
      this.testimonials = data;
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  addTestimonial(formData: FormData) {
    this.http.post('/api/testimonials', formData).subscribe(
      (response: any) => {
        // Add the new testimonial to the list (you may want to update this based on your response structure)
        this.testimonials.push(response);
        this.isModalOpen = false; // Close the modal after submission
      },
      (error) => {
        console.error('Error submitting testimonial:', error);
        // Handle error (optional)
      }
    );
  }
}
