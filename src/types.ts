export type GalleryCategory = 
  | 'ALL'
  | 'RANDOM'
  | 'NATURE'
  | 'ASSAM'
  | 'DELHI'
  | 'FITNESS';

export type ProjectCategory = GalleryCategory;

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'RANDOM' | 'NATURE' | 'ASSAM' | 'DELHI' | 'FITNESS';
  year: string;
  location?: string;
  client?: string;
  description: string;
  fullStory?: string;
  challenge?: string;
  solution?: string;
  heroImage: string;
  galleryImages: string[];
  tools: string[];
  featured?: boolean;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  tags: string[];
  colorAccent?: string;
  externalUrl?: string;
  linkText?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SoftwareTool {
  name: string;
  abbr: string;
  color: string;
  textColor: string;
  role: string;
  iconName?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
}

export interface Certificate {
  id: string;
  number: string;
  title: string;
  issuer: string;
  recipient?: string;
  year: string;
  credentialId?: string;
  skills: string;
  description: string;
  badge: string;
  status: string;
  verificationUrl?: string;
}

export interface EducationItem {
  id: string;
  number: string;
  level: string;
  title: string;
  institution: string;
  description: string;
  status: string;
}

