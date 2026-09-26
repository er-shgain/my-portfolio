import type { SkillItem, ProjectItem, ExperienceItem, EducationItem, SocialLink } from '../types';

export const personalInfo = {
  name: 'Sahinur Gain',
  title: 'Full Stack Software Engineer',
  subtitle: '2.5+ years building scalable web apps with React, Next.js, Node.js, and AWS.',
  about: `Full Stack Software Engineer with 2.5+ years of experience. At Techsunset (Bengaluru, Remote), I build scalable web applications, REST APIs, and cloud services. Experienced across E-Commerce (ProFlowers), Crypto dashboards, Real Estate, and Clinical portals. Completed 12th in 2021, followed by Software Engineering with CIT at WAP Institute (Grade A, 2023).`,
  email: 'sahinuraligain@gmail.com',
  phone: '+91 98765 43210',
  location: 'Open to Remote & Relocation',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  resumeUrl: '/resume.pdf',
  stats: [
    { label: 'Experience', value: '2.5+ Yrs' },
    { label: 'Projects Built', value: '20+' },
    { label: 'Company', value: 'Techsunset' },
    { label: 'Status', value: 'Immediate' },
  ],
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
];

export const skills: SkillItem[] = [
  { name: 'React.js / Next.js', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 96, category: 'frontend' },
  { name: 'Node.js & Express', level: 92, category: 'backend' },
  { name: 'MongoDB', level: 90, category: 'backend' },
  { name: 'REST APIs & WebSockets', level: 92, category: 'backend' },
  { name: 'AWS (EC2, S3, Lambda)', level: 82, category: 'tools' },
  { name: 'Git & Jira', level: 88, category: 'tools' },
];

export const experiences: ExperienceItem[] = [
  {
    period: '08 April 2024 – Present',
    role: 'Full Stack Software Engineer (Remote)',
    company: 'Techsunset',
    description: 'Techsunset (Bengaluru, Remote) | EMP: TS0542. Building scalable user interfaces and REST APIs with React, Next.js, Node.js, Express, and MongoDB. Managing AWS cloud services (EC2, S3, Lambda) and developed admin UI & backend APIs for proflowers.com.',
    skillsUsed: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Git', 'Jira'],
  },
];

export const educations: EducationItem[] = [
  {
    period: '2021 – 2023',
    degree: 'Software Engineering with CIT',
    institution: 'WAP Institute',
    description: 'Passed with Grade A (Reg ID: E9PMR6J5N). Hands-on software development training covering frontend frameworks, backend APIs, and database architecture.',
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'proflowers',
    title: 'ProFlowers Commerce & Admin',
    description: 'Flower booking platform (proflowers.com). Developed admin panel UI components and REST APIs for inventory and orders.',
    category: 'fullstack',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://proflowers.com',
    featured: true,
  },
  {
    id: '1',
    title: 'Multi-Vendor E-Commerce',
    description: 'Online store with category filters, cart persistence, and Stripe/Razorpay checkout.',
    category: 'fullstack',
    tags: ['React', 'Node.js', 'Tailwind', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Doctor & Clinic Portal',
    description: 'Healthcare booking platform with practitioner schedules and patient appointments.',
    category: 'fullstack',
    tags: ['React', 'TypeScript', 'Ant Design', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Real Estate Marketplace',
    description: 'Property search and rental platform with interactive map view and dynamic filters.',
    category: 'fullstack',
    tags: ['React', 'Next.js', 'Node.js', 'Tailwind', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: '4',
    title: 'CryptoPulse Real-Time Terminal',
    description: 'Live cryptocurrency tracker with WebSocket price stream and interactive charts.',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Tailwind', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: '5',
    title: 'TrustVibe Reviews Suite',
    description: 'Customer review and feedback platform with sentiment analysis and embeddable badges.',
    category: 'fullstack',
    tags: ['React', 'Node.js', 'Ant Design', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
];