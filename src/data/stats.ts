// src/data/stats.ts
import { Stat, MapPoint } from '../types';

export const stats: Stat[] = [
  { label: "Visitors Today", value: "85,432", change: "+12%" },
  { label: "Top Attraction", value: "The Bund", change: "#1 Trending" },
  { label: "Avg. Rating", value: "4.8/5", change: "↑ 0.2" },
  { label: "Recommended Routes", value: "15", change: "+3 New" },
];

export const mapPoints: MapPoint[] = [
  { top: "20%", left: "30%", name: "The Bund", city: "Shanghai" },
  { top: "40%", left: "60%", name: "Lujiazui", city: "Shanghai" },
  { top: "60%", left: "40%", name: "People's Square", city: "Shanghai" },
  { top: "50%", left: "25%", name: "West Lake", city: "Hangzhou" },
  { top: "45%", left: "35%", name: "Classical Gardens", city: "Suzhou" },
  { top: "55%", left: "45%", name: "Ancient Canals", city: "Wuzhen" },
];

export const galleryImages: string[] = [
  "/images/gallery/上海陆家嘴建筑.jpg",
  "/images/gallery/杭州龙井村.jpg",
  "/images/gallery/苏州平江路.jpg",
  "/images/gallery/乌镇西栅鞥景区.jpg",
];

// City descriptions in English
export const galleryDescriptions: string[] = [
  "Shanghai - China's most dynamic international metropolis, where modernity meets tradition, financial hub meets cultural capital.",
  "Hangzhou - Paradise on Earth, renowned for its West Lake scenery, where tea culture blends with historical heritage.",
  "Suzhou - Venice of the East, classical gardens and ancient water towns, a city with millennia of history and culture.",
  "Wuzhen - Model of Jiangnan water towns, ancient bridges over flowing canals, one of the best-preserved ancient towns."
];

// City names in English
export const galleryTitles: string[] = [
  "Shanghai",
  "Hangzhou",
  "Suzhou",
  "Wuzhen"
];

export const heroBackground = "/images/hero/外白渡桥陆家嘴金融建筑.jpeg";