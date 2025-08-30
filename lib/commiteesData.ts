// Define the structure of an Event and a Team Member for type safety

interface FlagshipEvent {
  name: string;
  description: string;
}

interface TeamMember {
  name: string;
  imageUrl: string;
}

interface Committee {
  slug: string;
  name: string;
  logoUrl: string;
  vision: string;
  flagshipEvents: FlagshipEvent[];
  team?: TeamMember[]; // The '?' makes the 'team' property optional
}

interface Category {
  category: string;
  categorySlug: string;
  committees: Committee[];
}

// Apply the 'Category[]' type to your data array
export const committeesData: Category[] = [
  {
    category: 'Fests',
    categorySlug: 'fests',
    committees: [
      {
        slug: 'sattva',
        name: 'Sattva',
        logoUrl: '/logos/sattva-logo.png',
        vision: 'Sattva is the cultural heart of MPSTME, celebrating creativity, talent, and the vibrant spirit of our student community through a dazzling array of events.',
        flagshipEvents: [
          { name: 'Cultural Parade', description: 'A vibrant showcase of traditions from across the country.' },
          { name: 'Battle of the Bands', description: 'Where musical talents clash for ultimate glory.' },
        ],
        team: [
          { name: 'Adhya Khandelwal', imageUrl: '/team/sc-logo.png' },
          { name: 'Soham Surve', imageUrl: '/team/soham.jpg' },
          { name: 'Manan Siroya', imageUrl: '/team/manan.jpg' },
          { name: 'Shubham Tanna', imageUrl: '/team/shubham.jpg' },
          { name: 'Sarah Noorani', imageUrl: '/team/sc-logo.png' },
        ],
      },
    ],
  },
  {
    category: 'Technical',
    categorySlug: 'technical',
    committees: [
      {
        slug: 'acm',
        name: 'ACM',
        logoUrl: '/logos/acm-logo.png',
        vision: 'ACM Student Chapters facilitate communication and collaboration within a university’s computer science community and with the computing community at large.',
        flagshipEvents: [
          { name: 'SemiCode', description: 'SemiCode is ACM MPSTME’s flagship event. It is a three-round coding competition in collaboration with other ACM Chapters.' },
          { name: 'Code-O-Fiesta', description: 'A 24-hour hackathon focused on solving real-world problems.' },
        ],
      },
    ],
  },
  // ... rest of your data
];