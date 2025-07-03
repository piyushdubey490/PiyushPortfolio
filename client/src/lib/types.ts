export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export interface Skill {
  category: string;
  skills: string[];
  color: string;
}

export interface Certification {
  title: string;
  issuer: string;
  color: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  budget: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  featured: boolean;
  author: string;
  image?: string;
}
