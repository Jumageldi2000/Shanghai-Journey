// src/components/pages/AttractionDetail.tsx - Fixed version
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  HeartIcon, 
  ClockIcon, 
  MapPinIcon, 
  TicketIcon,
  CalendarIcon,
  StarIcon,
  CameraIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { attractions } from '../data/attractions';
import { Attraction as AttractionType } from '../types';

interface Ticket {
  type: string;
  price: number;
  features: string[];
}

interface DetailAttraction {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  detailedDescription: string;
  bestTime: string;
  openingHours: string;
  address: string;
  tickets: Ticket[];
  tips: string[];
  gallery: string[];
  rating: number;
  reviews: number;
}

export const AttractionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [attraction, setAttraction] = useState<DetailAttraction | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const found = attractions.find(a => a.id === Number(id));
      if (found) {
        const detailAttraction: DetailAttraction = {
          ...found,
          detailedDescription: `${found.title} is ${found.description} Here is more detailed information about this iconic Shanghai landmark. You'll discover its history, architecture, and why it remains one of the city's most popular destinations.`,
          bestTime: "6:00 PM - 10:00 PM",
          openingHours: "Open 24 hours",
          address: `Address of ${found.title}, Shanghai`,
          tickets: [
            { type: "Adult", price: 120, features: ["General Admission", "Free Audio Guide"] },
            { type: "Child", price: 60, features: ["General Admission", "Kids Activities"] },
            { type: "VIP", price: 200, features: ["Fast Track", "Private Guide", "Souvenir"] }
          ],
          tips: [
            "Book tickets online in advance",
            "Best photography time is during sunset",
            "Weekends are crowded - visit on weekdays if possible",
            "Multiple subway stations nearby for easy access"
          ],
          gallery: [
            found.image,
            found.image, // Using same image temporarily, should be different images
            found.image
          ],
          rating: 4.8,
          reviews: 1243
        };
        setAttraction(detailAttraction);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  const handleImageSelect = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleBookTicket = () => {
    alert(`Successfully booked tickets for ${attraction?.title}!`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!attraction) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Attraction Not Found</h2>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              y: [null, -30, 30, -20],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBack}
          className="fixed top-6 left-6 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeftIcon className="w-6 h-6 text-gray-800 dark:text-white" />
        </motion.button>

        {/* Favorite Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setIsFavorite(!isFavorite)}
          className="fixed top-6 right-6 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <HeartIcon className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-800 dark:text-white'}`} />
        </motion.button>

        {/* Main Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[60vh] overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={attraction.gallery[currentImageIndex] || attraction.image}
              alt={attraction.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {attraction.title}
              </h1>
              <div className="flex items-center space-x-4 text-white/90">
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 mr-1 text-yellow-400" />
                  <span className="font-semibold">{attraction.rating}</span>
                  <span className="ml-1">({attraction.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-1" />
                  <span>{attraction.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-6xl mx-auto px-6 -mt-12 relative z-20"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Tags */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {attraction.tags.map((tag: string, index: number) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Details */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 dark:text-white">Overview</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {attraction.detailedDescription}
                    </p>
                  </motion.div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl"
                    >
                      <div className="flex items-center mb-4">
                        <ClockIcon className="w-6 h-6 text-purple-600 mr-3" />
                        <h3 className="text-lg font-bold dark:text-white">Best Time to Visit</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{attraction.bestTime}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl"
                    >
                      <div className="flex items-center mb-4">
                        <CalendarIcon className="w-6 h-6 text-pink-600 mr-3" />
                        <h3 className="text-lg font-bold dark:text-white">Opening Hours</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{attraction.openingHours}</p>
                    </motion.div>
                  </div>

                  {/* Gallery */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-white flex items-center">
                      <CameraIcon className="w-6 h-6 mr-2" />
                      Photo Gallery
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {attraction.gallery.map((img: string, index: number) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => handleImageSelect(index)}
                          className={`relative aspect-video rounded-xl overflow-hidden cursor-pointer ${
                            currentImageIndex === index ? 'ring-4 ring-purple-500' : ''
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {currentImageIndex === index && (
                            <div className="absolute inset-0 bg-purple-500/20" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right: Tickets */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg"
                  >
                    <h3 className="text-xl font-bold mb-6 dark:text-white flex items-center">
                      <TicketIcon className="w-6 h-6 mr-2" />
                      Tickets & Pricing
                    </h3>
                    
                    <div className="space-y-4">
                      {attraction.tickets.map((ticket: Ticket, index: number) => (
                        <motion.div
                          key={ticket.type}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.1 + index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-white dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-bold text-lg dark:text-white">{ticket.type}</h4>
                            <span className="text-2xl font-bold text-purple-600">¥{ticket.price}</span>
                          </div>
                          <ul className="space-y-2">
                            {ticket.features.map((feature: string, i: number) => (
                              <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleBookTicket}
                            className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                          >
                            Book Now
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Travel Tips */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg"
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-white flex items-center">
                      <UserGroupIcon className="w-6 h-6 mr-2" />
                      Travel Tips
                    </h3>
                    <ul className="space-y-3">
                      {attraction.tips.map((tip: string, index: number) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 + index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Attractions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-white">You Might Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {attractions
                .filter((a: AttractionType) => a.id !== attraction.id)
                .slice(0, 3)
                .map((related: AttractionType, index: number) => (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9 + index * 0.2 }}
                    whileHover={{ y: -10 }}
                    onClick={() => navigate(`/attraction/${related.id}`)}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg dark:text-white mb-2">{related.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                        {related.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Spacing */}
        <div className="h-20" />
      </div>
    </div>
  );
};