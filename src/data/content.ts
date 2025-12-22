export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  logoText: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'hamilton',
    title: 'Hamilton',
    category: 'Ecommerce',
    description: 'A fast-growing e-commerce business specializing in home goods and lifestyle products.',
    image: 'https://www.dropbox.com/scl/fi/hd1eruusdk88prubmt5th/73de4904b08f14db8a7e4a3743eb66e3.webp?rlkey=zwy3yyxsc0snwpn0rv0rg2m5e&st=6jghwnff&raw=1',
    logoText: 'Hamilton',
    stats: [
      { value: '55%', label: 'Reduction in food waste' },
      { value: '90%', label: 'On-time delivery rate' },
      { value: '35 days', label: 'To full deployment' }
    ]
  },
  {
    id: 'terra',
    title: 'Terra',
    category: 'Food & Beverage',
    description: 'A sustainable food company delivering organic meal kits to health-conscious customers nationwide.',
    image: 'https://www.dropbox.com/scl/fi/zrb8qve92d4eiqqywybai/6cbb0479c3bf90c0c4bc3c8fb194dc51.webp?rlkey=g4d9dsqzljudhv215wd6fbd6i&st=9imm93cv&raw=1',
    logoText: 'Terra',
    stats: [
      { value: '40%', label: 'Increase in efficiency' },
      { value: '24/7', label: 'Support coverage' },
      { value: '2 weeks', label: 'Implementation time' }
    ]
  },
  {
    id: 'savannah',
    title: 'Savannah',
    category: 'Marketing',
    description: 'A boutique marketing agency helping small businesses build their digital presence and grow online.',
    image: 'https://www.dropbox.com/scl/fi/rwluppijpnkg0951ymg8x/5e0b0f74d4b6d1e5ce4519dab347992a.webp?rlkey=xdy84nloxzv2vu142emedu71w&st=2cecuqhx&raw=1',
    logoText: 'SAVANNAH',
    stats: [
      { value: '3x', label: 'Lead generation' },
      { value: '60%', label: 'Cost reduction' },
      { value: '100+', label: 'Campaigns automated' }
    ]
  },
  {
    id: 'snowflake',
    title: 'Snowflake',
    category: 'Software',
    description: 'A SaaS company providing project management tools for remote teams across multiple industries.',
    image: 'https://www.dropbox.com/scl/fi/85ce6uagxy05jr2bzqvpn/2dd5b044dc55591807871009ffe14b27.webp?rlkey=lsqpvvuckq9sn1c6swqfpy6mw&st=hn73pspt&raw=1',
    logoText: 'Snowflake',
    stats: [
      { value: '85%', label: 'Customer satisfaction' },
      { value: '0', label: 'Downtime during migration' },
      { value: '1200+', label: 'Hours saved monthly' }
    ]
  }
];

export const newsItems: NewsItem[] = [
  {
    id: 'ai-trends-2025',
    title: 'The Future of AI in 2025',
    category: 'Industry Insights',
    date: 'March 15, 2025',
    description: 'Exploring the top trends that will define the next generation of artificial intelligence in business.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop'
  },
  {
    id: 'jane-expansion',
    title: 'Jane Expands to Europe',
    category: 'Company News',
    date: 'February 28, 2025',
    description: 'We are thrilled to announce our new headquarters in London to better serve our global clients.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'automation-guide',
    title: 'A Guide to Ethical Automation',
    category: 'Thought Leadership',
    date: 'January 10, 2025',
    description: 'How to implement AI systems that respect privacy, transparency, and human agency.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'series-a-funding',
    title: 'Securing Our Series A',
    category: 'Milestones',
    date: 'December 05, 2024',
    description: 'Jane raises $15M to accelerate the development of our proprietary AI integration platform.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2670&auto=format&fit=crop'
  }
];
