// src/pages/CustomToursPage.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  CalendarIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export const CustomToursPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTour, setSelectedTour] = useState<number | null>(null);

  const customTours = [
    {
      id: 1,
      title: "Tech & Innovation Tours",
      description: "Exclusive access to China's leading technology companies and innovation hubs",
      image: "/images/tours/tech-tour.jpg",
      experiences: [
        "Corporate Showroom Visits",
        "Tech Factory Tours", 
        "Startup Incubator Visits",
        "R&D Center Access",
        "Product Innovation Labs",
        "Tech Conference Access"
      ],
      fullDescription: "Experience China's technological frontier with exclusive visits to major tech companies, innovation centers, and research facilities. This tour is designed for business professionals, tech enthusiasts, and corporate groups who want to understand China's technological ecosystem.",
      features: [
        "Behind-the-scenes access to corporate headquarters",
        "Meetings with innovation and R&D teams",
        "Product demonstration and testing sessions",
        "Networking opportunities with industry leaders",
        "Insights into Chinese tech market strategies"
      ],
      itinerary: [
        { day: 1, title: "Arrival & Tech Briefing", description: "Welcome meeting and introduction to China's tech landscape" },
        { day: 2, title: "Corporate Visits", description: "Tour of leading technology company campuses and showrooms" },
        { day: 3, title: "Innovation Centers", description: "Visit to startup incubators and research facilities" },
        { day: 4, title: "Networking Sessions", description: "Meetings with tech executives and industry experts" },
        { day: 5, title: "Wrap-up & Departure", description: "Final discussion and personalized recommendations" }
      ],
      duration: "2-5 days",
      groupSize: "2-20 people",
      bestFor: ["Business professionals", "Tech enthusiasts", "Corporate groups", "University students", "Researchers"],
      requirements: [
        "Advance booking required (minimum 4 weeks)",
        "Valid passport and business visa",
        "Professional background information",
        "Security clearance for some facilities"
      ],
      price: "Custom quote based on requirements"
    },
    {
      id: 2,
      title: "Premium Experience Tours",
      description: "Unique and luxurious experiences designed for discerning travelers",
      image: "/images/tours/premium-tour.jpg",
      experiences: [
        "High-Speed Train Experiences",
        "Professional Drone Filming",
        "VIP Cultural Experiences", 
        "Private Art & Museum Tours",
        "Luxury Dining Experiences",
        "Personal Shopping Services"
      ],
      fullDescription: "Indulge in Shanghai's most exclusive experiences, from private high-speed train journeys to professional film production. Designed for travelers who seek luxury, privacy, and unique cultural immersion.",
      features: [
        "Private transportation and dedicated guides",
        "Access to restricted cultural sites",
        "Professional photo and video documentation",
        "Personalized itinerary design",
        "24/7 concierge service"
      ],
      duration: "3-7 days",
      groupSize: "1-10 people",
      bestFor: ["Luxury travelers", "Photographers", "Special occasions", "VIP clients"],
      price: "Starting from €5,000"
    },
    {
      id: 3,
      title: "Specialized Activity Tours",
      description: "Tailored experiences for specific interests and hobbies",
      image: "/images/tours/activity-tour.jpg",
      experiences: [
        "Photography Expeditions",
        "Culinary Masterclasses",
        "Traditional Craft Workshops",
        "Sports & Adventure Activities",
        "Wellness & Spa Retreats",
        "Art & Design Tours"
      ],
      fullDescription: "Immerse yourself in Shanghai through specialized activities that match your passions. Whether you're a foodie, photographer, or art lover, we create experiences that go beyond typical tourism.",
      features: [
        "Expert-led workshops and classes",
        "Access to master craftsmen and chefs",
        "Hands-on learning experiences",
        "Small group settings",
        "Take-home creations and memories"
      ],
      duration: "1-5 days",
      groupSize: "2-15 people",
      bestFor: ["Hobbyists", "Food enthusiasts", "Photographers", "Art lovers", "Active travelers"],
      price: "Starting from €800 per person"
    },
    {
      id: 4,
      title: "Digital & Media Tours",
      description: "Modern media and digital content creation experiences",
      image: "/images/tours/digital-tour.jpg",
      experiences: [
        "Live Streaming Experiences",
        "360° VR Content Creation",
        "Social Media Content Tours", 
        "Digital Art Installations",
        "Podcast Recording Sessions",
        "Influencer Marketing Tours"
      ],
      fullDescription: "Create compelling digital content while exploring Shanghai. Perfect for content creators, influencers, and digital marketers who want to produce unique content in one of the world's most photogenic cities.",
      features: [
        "Professional equipment and studios",
        "Content strategy consultation",
        "Local social media insights",
        "Editing and production support",
        "Distribution strategy guidance"
      ],
      duration: "2-7 days",
      groupSize: "1-8 people",
      bestFor: ["Content creators", "Influencers", "Digital marketers", "Videographers", "Bloggers"],
      price: "Custom packages available"
    }
  ];

  const handleBack = () => {
    navigate('/');
  };

  const handleInquiry = (tourId: number) => {
    const tour = customTours.find(t => t.id === tourId);
    if (tour) {
      alert(`Inquiry sent for ${tour.title}. We'll contact you within 24 hours.`);
    }
  };

  const selectedTourData = selectedTour ? customTours.find(t => t.id === selectedTour) : null;

  return (
    <div className="min-h-screen to-purple-50">
      {/* Navigation Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 to-purple-50 border-b border-gray-200 z-40"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleBack}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
              </motion.button>
              <div>
                <h1 className="text-xl font-medium text-gray-900">Custom Tours</h1>
                <p className="text-sm text-gray-500">Tailored Shanghai Experiences</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-full hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 tracking-wide">
            Custom<span className="font-medium ml-2 text-blue-700"> Shanghai Tours</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Personalize your Shanghai experience with our specialized tour packages. 
            Each tour can be customized to match your interests, schedule, and preferences.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Tour Selection */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Available Tour Types</h2>
              {customTours.map((tour) => (
                <motion.div
                  key={tour.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedTour(tour.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedTour === tour.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{tour.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{tour.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                          {tour.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Quick Contact */}
              <div className="mt-8 p-5 bg-gray-50 rounded-xl">
                <h3 className="font-medium text-gray-900 mb-3">Need Something Different?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Contact us to discuss completely customized tour options.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <PhoneIcon className="w-4 h-4" />
                    <span>+86 21 8888 9999</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <EnvelopeIcon className="w-4 h-4" />
                    <span>tours@shanghaijourney.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tour Details */}
          <div className="lg:col-span-2">
            {selectedTourData ? (
              <motion.div
                key={selectedTourData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Tour Header */}
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={selectedTourData.image}
                    alt={selectedTourData.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-medium text-white mb-2">
                      {selectedTourData.title}
                    </h2>
                    <p className="text-gray-200 text-sm">
                      {selectedTourData.description}
                    </p>
                  </div>
                </div>

                {/* Tour Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <ClockIcon className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Duration</span>
                    </div>
                    <p className="text-gray-700">{selectedTourData.duration}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <UserGroupIcon className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Group Size</span>
                    </div>
                    <p className="text-gray-700">{selectedTourData.groupSize}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarIcon className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Price Range</span>
                    </div>
                    <p className="text-gray-700">{selectedTourData.price}</p>
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Tour Overview</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedTourData.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">What's Included</h3>
                  <ul className="space-y-2">
                    {selectedTourData.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Experiences */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Available Experiences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedTourData.experiences.map((experience, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        <span className="text-gray-700">{experience}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Best For</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTourData.bestFor.map((group, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {group}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl border border-blue-100">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Ready to Book?</h3>
                  <p className="text-gray-600 mb-6">
                    Contact us to customize this tour package based on your specific requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleInquiry(selectedTourData.id)}
                      className="px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-colors"
                    >
                      Request Custom Quote
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/contact')}
                      className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors"
                    >
                      Contact Our Team
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* No Tour Selected State */
              <div className="h-full flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <CalendarIcon className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Select a Tour Type</h3>
                <p className="text-gray-600 max-w-md">
                  Choose a tour type from the left panel to view detailed information, 
                  available experiences, and customization options.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};