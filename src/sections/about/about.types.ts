export interface Skill {
  name: string;
  level: number;
}

export type SkillIconType = 'frontend' | 'backend' | 'database';

export interface SkillGroup {
  title: string;
  iconType: SkillIconType;
  color: string;
  skills: Skill[];
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface AboutContent {
  sectionBadge: string;
  mainHeading: {
    prefix: string;
    gradientText: string;
  };
  subHeading: string;
  trackRecordBadge: string;
  headline: string;
  bio: string;
  companyName: string;
  domainSpecialties: string[];
  metrics: MetricItem[];
  skillsVerificationText: string;
  skillGroups: SkillGroup[];
}