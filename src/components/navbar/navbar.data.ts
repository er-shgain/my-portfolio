import type { NavbarContent } from './navbar.types';

export const navbarData: NavbarContent = {
  brandName: 'Sahinur',
  brandDomain: '.dev',
  hireButtonText: 'Hire Me',
  mobileCtaText: 'Get In Touch',
  mobileCtaHref: '#contact',
  whatsappNumber: '+91 98765 43210',
  whatsappMessage: 'Hi! I saw your portfolio and would like to connect.',
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ],
};