export interface Projects {
  name: string;
  description: string;
  tech: TechItem[];
  image: string;
 
}

export interface TechItem {
  tech: string;
  image: string;
}