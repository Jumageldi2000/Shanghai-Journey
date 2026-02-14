// src/components/ui/AttractionCard.tsx - 更新版
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Attraction } from '../../types';

interface AttractionCardProps {
  attraction: Attraction;
  index: number;
  inView: boolean;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({ 
  attraction, 
  index, 
  inView 
}) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/attraction/${attraction.id}`);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-gray-800 cursor-pointer"
      onClick={handleViewDetails}
    >
      <div className="h-64 overflow-hidden">
        <motion.img
          src={attraction.image}
          alt={attraction.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold dark:text-white">{attraction.title}</h3>
          <HeartIcon 
            className={`w-6 h-6 cursor-pointer transition-colors ${
              isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-500'
            }`}
            onClick={handleFavorite}
          />
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {attraction.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {attraction.tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* 悬浮效果层 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewDetails}
          className="w-full py-3 bg-white text-black font-semibold rounded-lg shadow-lg pointer-events-auto"
        >
          查看详情
        </motion.button>
      </div>
    </motion.div>
  );
};