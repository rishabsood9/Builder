import { Component } from '@angular/core';

@Component({
  selector: 'app-aero-city',
  templateUrl: './aero-city.component.html',
  styleUrls: ['./aero-city.component.css'],
})
export class AeroCityComponent {
  projectDescription = `Strategically located on the Airport Road, AeroCity is just a few kilometers 
                        from the main connecting highway, offering immense potential for future appreciation.`;

  projectDetails = {
    'Land Area': '151 Acres',
    'Plot Size': '200 - 2000 Sq.Yrd',
    'Club House': 'Spread over 4 Acres',
    Parks: 'Spread over 12 Acres',
    'Open Space': '70%',
    Price: 'Price On Request',
  };

  extraInfo = `Aerocity, Amritsar, unfolds over 151 acres as a meticulously planned township 
               featuring 12 acres of themed parks and a 4-acre clubhouse equipped with modern amenities.`;

  testimonials = [
    { comment: 'Luxurious living with modern amenities.' },
    {
      comment:
        'A well-planned township offering great investment opportunities.',
    },
    // Add more testimonials
  ];

  nearbyPlaces = {
    'Healthcare Facilities': [
      'Civil Hospital, Ajnala Road, Amritsar - 3 km',
      'Fortis Hospital, Amritsar - 7 km',
      // More places...
    ],
    'Educational Institutions': [
      'Delhi Public School, Amritsar - 5 km',
      'Amritsar Public School, Ajnala Road - 1.5 km',
      // More places...
    ],
    'Malls/Shopping Centers': [
      'AlphaOne Mall, Amritsar - 8 km',
      'Celebration Mall, Amritsar - 6 km',
      // More places...
    ],
  };
  projectTitle = 'Aerocity, Amritsar';
  aboutInfo =
    'Aerocity unfolds over 151 acres as a meticulously planned township featuring 12 acres of themed parks and a 4-acre clubhouse equipped with modern amenities. This development boasts a polished neighborhood and an impressive 80 ft wide entrance, setting a new standard for urban living.';

  constructionPics = [
    '/assets/construction1.jpg',
    '/assets/construction2.jpg',
    // Add more images
  ];

  luxuries = [
    {
      title: 'Themed Gardens',
      description:
        'Explore serene, uniquely designed gardens, each offering a different peaceful environment for relaxation.',
      icon: 'fas fa-leaf', // Font Awesome icon class
    },
    {
      title: '24x7 CCTV Surveillance',
      description:
        'State-of-the-art security cameras monitor the entire community round the clock to ensure complete safety.',
      icon: 'fas fa-video',
    },
    {
      title: '80 Feet Wide Entrance',
      description:
        'A grand, welcoming entrance that sets the tone for a luxurious and spacious living experience.',
      icon: 'fas fa-door-open',
    },
    {
      title: 'Club House',
      description:
        'A sophisticated clubhouse with top-tier amenities for recreation, relaxation, and socializing with fellow residents.',
      icon: 'fas fa-building',
    },
    {
      title: 'Guard Rooms',
      description:
        'Well-staffed guard rooms at key locations, ensuring vigilant supervision and immediate security response when needed.',
      icon: 'fas fa-shield-alt',
    },
    {
      title: 'Inbuilt Wi-Fi System',
      description:
        'Stay connected seamlessly throughout the community with high-speed internet, making life more convenient.',
      icon: 'fas fa-wifi',
    },
    {
      title: 'Jogging Tracks',
      description:
        'Beautifully landscaped tracks designed to encourage an active lifestyle amidst lush greenery and open spaces.',
      icon: 'fas fa-running',
    },
    {
      title: 'Swimming Pool',
      description:
        'A luxurious, sparkling pool area perfect for relaxation and recreation, enhancing your overall living experience.',
      icon: 'fas fa-swimmer',
    },
    {
      title: 'Healthcare Facility',
      description:
        'A well-equipped healthcare facility within the community, offering you quick access to medical care whenever needed.',
      icon: 'fas fa-plus-circle',
    },
    {
      title: '3-Tier Security System',
      description:
        'Multi-layered security that ensures peace of mind, with guards, technology, and CCTV surveillance all working in unison.',
      icon: 'fas fa-lock',
    },
    {
      title: 'Garden Space',
      description:
        'Lush, open green spaces designed for leisure, providing a serene escape from the hustle and bustle of daily life.',
      icon: 'fas fa-tree',
    },
  ];
}
