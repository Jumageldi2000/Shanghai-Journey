// src/components/sections/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { heroBackground } from '../../data/stats';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate(); // 添加这行

  const handleStartJourney = () => {
    navigate('/tours'); // 跳转到旅游路线页面，你也可以改成其他路径
  };
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"> Shanghai </span>
            <br />
            City of Endless Charm
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Where modern metropolis meets historic heritage—a dream city beneath the Oriental Pearl
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartJourney}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 group animate-glow"
            >
              Start Your Journey
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold text-lg"
            >
              View Travel Guide
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};