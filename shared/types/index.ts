export interface Project {
  name: string;
  description: string;
  url: string;
  repository?: string;
  category: string;
  stars?: number;
  forks?: number;
  mainLanguage?: string;
  license?: string;
  lastUpdated?: string;
  metadata?: Array<string>;
  openIssues?: number;
}