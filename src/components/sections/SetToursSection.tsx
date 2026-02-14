// src/components/sections/SetToursSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  CalendarIcon, 
} from '@heroicons/react/24/outline';

export const SetToursSection: React.FC = () => {
  const navigate = useNavigate();

  const setTours = [
    {
      id: 1,
      title: "Classic East China Tour",
      subtitle: "Shanghai, Hangzhou, Suzhou & Wuzhen",
      duration: "6 Days / 5 Nights",
      description: "Experience the best of East China with this comprehensive tour covering modern Shanghai, serene Hangzhou, classical Suzhou, and picturesque Wuzhen.",
      image: "/images/tours/苏州平江路.jpeg",
      highlights: ["Shanghai skyline", "West Lake", "Classical gardens", "Water towns"],
      tags: ["Cultural", "Scenic"],
      destinations: ["Shanghai", "Hangzhou", "Suzhou", "Wuzhen"],
      price: "More information",
      rating: 4.9
    },
    {
      id: 2,
      title: "Shanghai Highlights",
      subtitle: "1-Day Essential City Tour",
      duration: "1 Day",
      description: "Perfect for time-pressed travelers, this one-day tour introduces you to Shanghai's most iconic places, giving you the freedom to experience the city your way.",
      image: "/images/tours/上海南京路步行街.jpeg",
      highlights: ["The Bund", "Yu Garden", "Lujiazui", "French Concession"],
      tags: ["Day Tour", "Historic", "Modern"],
      destinations: ["Shanghai"],
      price: "More information",
      rating: 4.7
    },
    {
      id: 3,
      title: "Gourmet Shanghai",
      subtitle: "Food & Culture Experience",
      duration: "3 Days / 2 Nights",
      description: "A culinary journey through Shanghai, tasting traditional Shanghainese cuisine and learning about food culture.",
      image: "/images/tours/小笼包.jpg",
      highlights: ["Local markets", "Cooking classes", "Food streets", "Fine dining"],
      tags: ["Food Tour", "Cultural", "Hands-on"],
      destinations: ["Shanghai"],
      price: "More information",
      rating: 4.8
    }
  ];

  const handleTourClick = (tourId: number) => {
    navigate(`/tour/${tourId}`);
  };

  const handleViewAllTours = () => {
    navigate('/tours');
  };

  return (
    <section className="py-20 to-purple-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
            Curated<span className="font-medium ml-2 text-blue-700"> Travel Experiences</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Carefully designed tours showcasing the best of Shanghai and East China
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {setTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => handleTourClick(tour.id)}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                  <span className="text-sm font-bold text-gray-800">★ {tour.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {tour.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tour.description}
                </p>

                {/* Tour Details */}
                <div className="mb-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <CalendarIcon className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {tour.destinations.join(' - ')}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {tour.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-700 font-bold hover:underline">
                    More information
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewAllTours}
            className="px-6 py-3 bg-blue-50 text-blue-700 font-medium rounded-full hover:bg-blue-100 transition-colors"
          >
            View All Tours →
          </motion.button>
        </div>
      </div>
    </section>
  );
};