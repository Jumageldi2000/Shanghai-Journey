// src/types/index.ts
export interface Attraction {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
  area: string;  // District/area
  categories: string[];
  tourCount: number;
  tours: string[];  // Available tour names
}

export interface Activity {
  id: number;
  title: string;
  time: string;
  description: string;
  icon: React.ReactNode;
}

export interface Stat {
  label: string;
  value: string;
  change: string;
}

export interface MapPoint {
  top: string;
  left: string;
  name: string;
  city: string;
  
}