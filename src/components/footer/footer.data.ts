import type { FooterData } from './footer.types';

export const footerData: FooterData = {
  developerName: 'Sahinur Gain',
  domainSuffix: '.dev',
  availabilityText: 'Available for Hire',
  techStackNotice: 'React • TypeScript • Tailwind',
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Career', href: '#career' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: 'twitter',
    },
  ],
};