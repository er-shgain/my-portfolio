export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: 'frontend' | 'fullstack';
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  skillsUsed: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  phone?: string;
  email: string;
  subject: string;
  message: string;
}