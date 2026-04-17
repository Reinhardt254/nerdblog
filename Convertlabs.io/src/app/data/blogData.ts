export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  image: string;
  featured?: boolean;
  popular?: boolean;
}

export const categories = [
  { id: 'restaurant-cleaning', name: 'Restaurant Cleaning', icon: '🍽️' },
  { id: 'house-cleaning', name: 'House Cleaning', icon: '🏠' },
  { id: 'commercial-cleaning', name: 'Commercial Cleaning', icon: '🏢' },
  { id: 'carpet-cleaning', name: 'Carpet & Upholstery', icon: '🛋️' },
  { id: 'window-cleaning', name: 'Window Cleaning', icon: '🪟' },
  { id: 'deep-cleaning', name: 'Deep Cleaning', icon: '✨' },
  { id: 'business-tips', name: 'Business Tips', icon: '💼' },
  { id: 'equipment-tools', name: 'Equipment & Tools', icon: '🧰' },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'complete-restaurant-cleaning-guide-2026',
    title: 'The Complete Restaurant Cleaning Guide for 2026: Everything You Need to Know',
    excerpt: 'Discover comprehensive cleaning protocols, health code requirements, and best practices to maintain a spotless restaurant that passes every health inspection.',
    category: 'restaurant-cleaning',
    tags: ['Restaurant', 'Health Code', 'Checklist', 'Best Practices'],
    author: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    publishDate: '2026-03-28',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1579854602730-8e674c81b3cb?w=1200',
    featured: true,
    popular: true,
  },
  {
    id: '2',
    slug: 'professional-house-cleaning-checklist',
    title: 'Professional House Cleaning Checklist: Room-by-Room Deep Clean Guide',
    excerpt: 'Master the art of professional house cleaning with our comprehensive room-by-room checklist that ensures nothing gets missed.',
    category: 'house-cleaning',
    tags: ['House Cleaning', 'Checklist', 'Deep Clean', 'Professional'],
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
    publishDate: '2026-03-25',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200',
    featured: true,
    popular: true,
  },
  {
    id: '3',
    slug: 'commercial-cleaning-business-success',
    title: 'How to Build a 6-Figure Commercial Cleaning Business in 12 Months',
    excerpt: 'Learn the exact strategies successful cleaning business owners use to scale from solo operator to thriving team.',
    category: 'business-tips',
    tags: ['Business', 'Growth', 'Scaling', 'Entrepreneur'],
    author: {
      name: 'Jennifer Martinez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
    publishDate: '2026-03-22',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    featured: true,
    popular: true,
  },
  {
    id: '4',
    slug: 'restaurant-kitchen-deep-cleaning-guide',
    title: 'Restaurant Kitchen Deep Cleaning: The Ultimate Guide to Hood Vents, Grease Traps & More',
    excerpt: 'Master the most challenging aspects of restaurant kitchen cleaning with expert techniques for hood vents, grease traps, and equipment maintenance.',
    category: 'restaurant-cleaning',
    tags: ['Restaurant', 'Kitchen', 'Deep Clean', 'Equipment'],
    author: {
      name: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    },
    publishDate: '2026-03-20',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1549996647-190b679b33d7?w=1200',
    popular: true,
  },
  {
    id: '5',
    slug: 'carpet-cleaning-business-equipment',
    title: 'Best Carpet Cleaning Equipment for Professional Services in 2026',
    excerpt: 'Compare the top carpet cleaning machines, chemicals, and tools that professional cleaners recommend for superior results.',
    category: 'equipment-tools',
    tags: ['Carpet Cleaning', 'Equipment', 'Reviews', 'Professional'],
    author: {
      name: 'Robert Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    },
    publishDate: '2026-03-18',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
  },
  {
    id: '6',
    slug: 'eco-friendly-green-cleaning-products',
    title: 'Green Cleaning Products That Actually Work: A Complete Guide for Professional Cleaners',
    excerpt: 'Discover effective eco-friendly cleaning solutions that deliver professional results while protecting the environment and your health.',
    category: 'equipment-tools',
    tags: ['Green Cleaning', 'Eco-Friendly', 'Products', 'Health'],
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    },
    publishDate: '2026-03-15',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200',
    popular: true,
  },
  {
    id: '7',
    slug: 'window-cleaning-high-rise-buildings',
    title: 'High-Rise Window Cleaning: Safety Protocols and Best Practices',
    excerpt: 'Essential safety guidelines and professional techniques for cleaning windows on tall buildings and commercial properties.',
    category: 'window-cleaning',
    tags: ['Window Cleaning', 'Safety', 'Commercial', 'High-Rise'],
    author: {
      name: 'James Anderson',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150',
    },
    publishDate: '2026-03-12',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200',
  },
  {
    id: '8',
    slug: 'cleaning-business-marketing-strategies',
    title: '10 Marketing Strategies That Will Double Your Cleaning Business Clients',
    excerpt: 'Proven marketing tactics specifically designed for cleaning businesses to attract more clients and increase revenue.',
    category: 'business-tips',
    tags: ['Marketing', 'Business Growth', 'Clients', 'Strategy'],
    author: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    publishDate: '2026-03-10',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
  },
  {
    id: '9',
    slug: 'commercial-office-cleaning-standards',
    title: 'Commercial Office Cleaning Standards: Meeting Client Expectations Every Time',
    excerpt: 'Learn the professional standards and quality benchmarks that commercial cleaning clients expect from their service providers.',
    category: 'commercial-cleaning',
    tags: ['Commercial', 'Standards', 'Quality', 'Office'],
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
    publishDate: '2026-03-08',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200',
    popular: true,
  },
  {
    id: '10',
    slug: 'deep-cleaning-vs-regular-cleaning',
    title: 'Deep Cleaning vs. Regular Cleaning: When and How to Offer Each Service',
    excerpt: 'Understand the key differences between deep cleaning and regular maintenance, and how to price and package both services.',
    category: 'deep-cleaning',
    tags: ['Deep Cleaning', 'Pricing', 'Services', 'Guide'],
    author: {
      name: 'Jennifer Martinez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
    publishDate: '2026-03-05',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1200',
  },
  {
    id: '11',
    slug: 'cleaning-business-pricing-guide',
    title: 'How to Price Your Cleaning Services: A Complete Guide to Profitable Rates',
    excerpt: 'Set competitive yet profitable pricing for your cleaning services with our comprehensive guide covering residential and commercial rates.',
    category: 'business-tips',
    tags: ['Pricing', 'Business', 'Profit', 'Strategy'],
    author: {
      name: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    },
    publishDate: '2026-03-02',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200',
  },
  {
    id: '12',
    slug: 'restaurant-health-inspection-preparation',
    title: 'Pass Every Restaurant Health Inspection: Complete Preparation Checklist',
    excerpt: 'Never fail a health inspection again with this comprehensive checklist covering every area inspectors examine.',
    category: 'restaurant-cleaning',
    tags: ['Restaurant', 'Health Inspection', 'Compliance', 'Checklist'],
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    },
    publishDate: '2026-02-28',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1560841607-dc8d9a2cc562?w=1200',
  },
];

export const trendingTags = [
  'Restaurant Hygiene',
  'Professional Cleaning',
  'Business Growth',
  'Cleaning Checklist',
  'Health & Safety',
  'Green Cleaning',
  'Equipment Guide',
  'Marketing Tips',
];
