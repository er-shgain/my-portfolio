export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarContent {
  brandName: string;
  brandDomain: string;
  hireButtonText: string;
  mobileCtaText: string;
  mobileCtaHref: string;
  whatsappNumber: string;
  whatsappMessage: string;
  navItems: NavItem[];
}