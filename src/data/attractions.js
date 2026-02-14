// src/data/attractions.ts
import { Attraction } from '../types';

export const attractions: Attraction[] = [
  {
    id: 1,
    title: "The Bund at Night",
    description: "Where historic architecture meets the futuristic skyline of Lujiazui—experience the blend of Shanghai's past and present.",
    image: "/images/attractions/上海外滩万国建筑群.jpg",
    tags: ["Night View", "Historic Buildings", "Must-Visit"]
  },
  {
    id: 2,
    title: "Oriental Pearl Tower",
    description: "Take in panoramic views of Shanghai from 468 meters up, and brave the thrilling glass-bottom skywalk.",
    image: "/images/attractions/上海东方明珠.jpg",
    tags: ["Landmark", "City Views", "Modern Architecture"]
  },
  {
    id: 3,
    title: "Yu Garden & City God Temple",
    description: "A lively fusion of Ming-dynasty gardens and bustling markets, perfect for tasting traditional Shanghainese snacks.",
    image: "/images/attractions/上海城隍庙.jpg",
    tags: ["Classical Garden", "Local Food", "Culture"]
  },
  {
    id: 4,
    title: "Shanghai Disney Resort",
    description: "Step into a world of magic and fantasy—an immersive experience perfect for the whole family.",
    image: "/images/attractions/上海迪斯尼.png",
    tags: ["Theme Park", "Family Fun", "Entertainment"]
  }
];