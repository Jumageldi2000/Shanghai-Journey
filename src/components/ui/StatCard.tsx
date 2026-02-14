// src/components/ui/StatCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Stat } from '../../types';

interface StatCardProps {
  stat: Stat;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
        {stat.value}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 dark:text-gray-300">{stat.label}</span>
        <span className="text-green-500 font-semibold">{stat.change}</span>
      </div>
    </motion.div>
  );
};