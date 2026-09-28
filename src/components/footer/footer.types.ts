export interface FooterNavLink {
  label: string;
  href: string;
}

export interface FooterSocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | string;
}

export interface FooterData {
  developerName: string;
  domainSuffix: string;
  availabilityText: string;
  techStackNotice: string;
  navLinks: FooterNavLink[];
  socialLinks: FooterSocialLink[];
}