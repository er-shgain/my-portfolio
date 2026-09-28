import type { AboutContent } from './about.types';

export const aboutData: AboutContent = {
  sectionBadge: 'About the Engineer',
  mainHeading: {
    prefix: 'Engineering with',
    gradientText: 'Precision & Focus',
  },
  subHeading: 'Production tools, enterprise architectures, and real-world system delivery.',
  trackRecordBadge: 'Active Engineering Track Record',
  headline: 'I am a Full Stack Software Engineer with 2.5 years of experience delivering robust web applications.',
  bio: 'Currently building scalable systems at Techsunset. My technical repertoire covers end-to-end web architecture: high-conversion E-commerce, multi-tenant Real Estate portals, clinical booking systems, real-time Crypto dashboards, and automated review suites.',
  companyName: 'Techsunset',
  domainSpecialties: [
    'E-Commerce & Payment Gateways',
    'Clinical & Doctor Booking Portals',
    'Multi-Tenant Real Estate Marketplaces',
    'Live Crypto WebSocket Dashboards',
    'NPS & Review Feedback Automation',
  ],
  metrics: [
    { value: '2.5+ Yrs', label: 'Industry Exp' },
    { value: 'Techsunset', label: 'Active Role' },
  ],
  skillsVerificationText: 'Verified Production Skill',
  skillGroups: [
    {
      title: 'Frontend Architecture',
      iconType: 'frontend',
      color: 'from-blue-500 to-indigo-500',
      skills: [
        { name: 'React.js / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 96 },
        { name: 'Ant Design', level: 92 },
        { name: 'Redux Toolkit / Zustand', level: 88 },
      ],
    },
    {
      title: 'Backend & Microservices',
      iconType: 'backend',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Node.js & Express.js', level: 90 },
        { name: 'REST & GraphQL APIs', level: 92 },
        { name: 'JWT & OAuth Authentication', level: 94 },
        { name: 'Socket.IO Real-Time', level: 85 },
        { name: 'Stripe & Razorpay Integration', level: 92 },
      ],
    },
    {
      title: 'Databases & DevOps',
      iconType: 'database',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB & Mongoose', level: 88 },
        { name: 'PostgreSQL & Prisma', level: 85 },
        { name: 'Redis Caching', level: 80 },
        { name: 'Docker Containerization', level: 78 },
        { name: 'Git & GitHub Actions CI/CD', level: 88 },
      ],
    },
  ],
};