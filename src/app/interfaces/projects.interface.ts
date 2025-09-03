export interface Projects {
  name: string;
  description: string;
  tech: TechItem[];
  image: string;
  index?: number;
}

export interface TechItem {
  tech: string;
  image: string;
}