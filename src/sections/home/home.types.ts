export interface StatItem {
    label: string;
    value: string;
}

export interface HomeTerminalProfile {
    name: string;
    company: string;
    tenure: string;
    overallExp: string;
    skills: string[];
    recentProject: string;
    availability: string;
}

export interface HomeContent {
    engineerName: string;
    title: string;
    location: string;
    avatar: string;
    headlinePrefix: string;
    headlineGradient: string;
    headlineSuffix: string;
    subtitle: string;
    resumeUrl: string;
    resumeFileName: string;
    exploreBtnText: string;
    contactBtnText: string;
    resumeBtnText: string;
    whatsappNumber: string;
    whatsappMessage: string;
    stats: StatItem[];
    terminal: HomeTerminalProfile;
}