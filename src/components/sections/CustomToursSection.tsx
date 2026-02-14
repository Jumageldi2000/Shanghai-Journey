// src/components/sections/CustomToursSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export const CustomToursSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();

  const customTourTypes = [
    {
      id: 1,
      title: "Tech & Innovation Experiences",
      subtitle: "Technology • Media • Digital Content",
      description: "Explore China's cutting-edge technology, media and digital innovation landscape with exclusive access and hands-on experiences",
      image: "/images/tours/tech-media.jpeg",
      experiences: [
        "Corporate Showroom & Factory Visits",
        "Live Streaming & Social Media Experiences",
        "Professional Drone Filming Sessions",
        "Startup & Innovation Hub Tours",
        "R&D Center & Tech Lab Access",
        "Digital Content Creation Workshops"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Premium Cultural Experiences",
      subtitle: "Culture • Cuisine • Arts • Crafts",
      description: "Immerse yourself in authentic Chinese culture through luxury experiences, culinary journeys, and hands-on traditional arts",
      image: "/images/tours/premium-culture.jpeg",
      experiences: [
        "Premium Cultural & Heritage Tours",
        "Culinary Masterclasses & Food Tours",
        "Photography Expeditions",
        "Traditional Craft Workshops",
        "Private Art & Museum Tours",
        "VIP Cultural Performances"
      ],
      color: "purple"
    }
  ];

  const handleViewTourDetails = (tourId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/custom-tours/${tourId}`);
  };

  return (
    <section ref={ref} className="py-20 px-6 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
            Tailored <span className="font-medium text-blue-700">Shanghai Experiences</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Beyond tourism—personalized journeys crafted for your specific interests
          </p>
        </motion.div>

        {/* Two Main Options - Side by Side on Desktop */}
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12">
          {customTourTypes.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={(e) => handleViewTourDetails(tour.id, e)}
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image with Overlay */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <motion.img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Title on Image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className={`inline-block px-4 py-2 rounded-full backdrop-blur-sm bg-white/20 mb-3`}>
                      <span className="text-white text-sm font-medium">{tour.subtitle}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{tour.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">
                    {tour.description}
                  </p>
                  
                  {/* Experiences Grid */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                      Featured Experiences
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tour.experiences.map((experience, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3 ${
                            tour.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                          }`} />
                          <span className="text-gray-800 text-sm">{experience}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <div>
                      <span className="text-gray-500 text-sm">Customizable experiences</span>
                    </div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-2 text-lg font-medium ${
                        tour.color === 'blue' ? 'text-blue-700 hover:text-blue-800' : 'text-purple-700 hover:text-purple-800'
                      }`}
                    >
                      Explore Experiences
                      <ArrowRightIcon className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-12 border-t border-gray-100"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-light text-gray-900 mb-4">How It Works</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple process to create your perfect Shanghai experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Share Your Interests", desc: "Tell us what experiences interest you" },
              { step: 2, title: "We Design", desc: "We create a personalized itinerary" },
              { step: 3, title: "Finalize Details", desc: "We arrange all logistics" },
              { step: 4, title: "Experience Shanghai", desc: "Enjoy your exclusive journey" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};