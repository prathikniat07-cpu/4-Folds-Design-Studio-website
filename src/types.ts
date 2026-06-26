export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'wide';
  description: string;
  philosophies?: string[];
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  subtitle: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon from lucide-react
  gridSpan: 'large' | 'medium' | 'small';
  image?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  milestone: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  snippet: string;
}

export interface Award {
  id: string;
  title: string;
  category: string;
  year: string;
  agency: string;
}
