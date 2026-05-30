export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveDemoSupported: boolean;
  githubUrl: string;
  image: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  subTitle: string;
  year: string;
  details: string;
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; percentage: number }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
}
