// src/components/layout/Footer.tsx
import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

export const Footer: React.FC = () => {
  const footerColumns = ['Quick Links', 'Popular Attractions', 'Travel Services', 'Contact Us'];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <SparklesIcon className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold">Shanghai Journey</span>
            </div>
            <p className="text-gray-400">
              Discover Shanghai, experience its charm
            </p>
          </div>
          
          {footerColumns.map((column) => (
            <div key={column}>
              <h3 className="text-lg font-bold mb-4">{column}</h3>
              <ul className="space-y-2">
                {Array(4).fill(0).map((_, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Link Item {i + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Shanghai Journey - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};