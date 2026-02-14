// src/pages/CustomTourDetail.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CameraIcon, CalendarIcon, UserIcon, MapIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

// 数据定义
const tourData = {
  'tech-media': {
    id: 'tech-media',
    title: "Tech & Digital Media Tours",
    subtitle: "Experience China's innovation through exclusive corporate visits and professional media production",
    description: "Our Tech & Digital Media Tours offer unprecedented access to China's leading technology companies and digital innovation hubs. From corporate showrooms to live streaming studios, we provide insider experiences that showcase China's technological advancement and media production capabilities.",
    mainImage: "/images/tours/tech-media.jpeg",
    highlights: [
      {
        title: "Corporate Showroom Visits",
        description: "Get exclusive access to cutting-edge technology showcases at leading Chinese tech companies. Experience the latest innovations firsthand and learn about China's technological journey from industry experts.",
        images: ["/images/tours/tech-media.jpeg", "/images/tours/tech-media-showroom.jpg"]
      },
      {
        title: "Factory & Manufacturing Tours",
        description: "Go behind the scenes of advanced manufacturing facilities to see how products are developed and produced at scale. Understand the processes that power China's industrial innovation.",
        images: ["/images/tours/tech-factory.jpg", "/images/tours/tech-production.jpg"]
      },
      {
        title: "Live Streaming Studios",
        description: "Explore professional content creation setups used by top influencers and brands. Learn about the tools and techniques behind China's massive live commerce ecosystem.",
        images: ["/images/tours/live-streaming-studio.jpg", "/images/tours/content-creation.jpg"]
      },
      {
        title: "Drone Filming Sessions",
        description: "Experience aerial photography with professional-grade drones. Capture stunning views of landmarks and landscapes while learning from expert pilots about advanced filming techniques.",
        images: ["/images/tours/drone-filming.jpg", "/images/tours/aerial-shot.jpg"]
      },
      {
        title: "VR/AR Innovation Labs",
        description: "Step into the future of immersive technology at dedicated innovation labs. Try out cutting-edge VR/AR applications and interact with prototypes not yet available to the public.",
        images: ["/images/tours/vr-experience.jpg", "/images/tours/ar-demo.jpg"]
      },
      {
        title: "Social Media Workshops",
        description: "Learn from professionals about effective social media strategies in the Chinese market. Understand platform differences and get insights into viral content creation techniques.",
        images: ["/images/tours/social-media-workshop.jpg", "/images/tours/wechat-marketing.jpg"]
      }
    ],
    whyChoose: [
      "Exclusive access not available to regular tourists",
      "Professional media production support available",
      "Networking opportunities with industry professionals",
      "Tailored to your specific tech interests"
    ]
  },
  'premium-culture': {
    id: 'premium-culture',
    title: "Premium Cultural Experience Tours",
    subtitle: "Immerse yourself in authentic Chinese culture through curated high-end experiences",
    description: "Our Premium Cultural Experience Tours are designed for discerning travelers seeking authentic and exclusive cultural immersion. From culinary masterclasses with renowned chefs to private art collections, we provide access to China's rich cultural heritage through unique, VIP experiences.",
    mainImage: "/images/tours/上海豫园.jpeg",
    highlights: [
      {
        title: "Culinary Masterclass",
        description: "Join renowned chefs in exclusive cooking sessions where you'll learn traditional techniques and secret recipes passed down through generations. Enjoy your creations in an elegant dining setting.",
        images: ["/images/tours/culinary-class.jpg", "/images/tours/chef-teaching.jpg"]
      },
      {
        title: "Photography Expeditions",
        description: "Embark on guided photography tours led by professional photographers who know the best spots and lighting conditions. Capture authentic moments and beautiful landscapes with expert guidance.",
        images: ["/images/tours/杭州西湖雷峰塔.jpeg", "/images/tours/上海外滩万国建筑群.jpeg"]
      },
      {
        title: "Traditional Craft Workshops",
        description: "Master traditional arts under the guidance of skilled artisans. Learn techniques like calligraphy, porcelain painting, silk weaving, or jade carving from masters with decades of experience.",
        images: ["/images/tours/craft-workshop.jpg", "/images/tours/traditional-art.jpg"]
      },
      {
        title: "Private Art Collections",
        description: "Gain access to exclusive private art collections and museums normally closed to the public. Engage with collectors and curators to understand the historical and cultural significance of rare pieces.",
        images: ["/images/tours/private-collection.jpg", "/images/tours/art-gallery.jpg"]
      },
      {
        title: "Cultural Performances",
        description: "Attend premium cultural performances featuring traditional music, dance, and theater. Enjoy VIP seating and meet artists after the show for a deeper appreciation of Chinese performing arts.",
        images: ["/images/tours/traditional-performance.jpg", "/images/tours/opera-show.jpg"]
      },
      {
        title: "Luxury Accommodations",
        description: "Stay in carefully selected luxury hotels and heritage properties that combine comfort with authentic Chinese aesthetics. Experience hospitality that reflects centuries of cultural refinement.",
        images: ["/images/tours/luxury-accommodation.jpg", "/images/tours/traditional-hotel.jpg"]
      }
    ],
    whyChoose: [
      "Authentic cultural immersion with local experts",
      "VIP access to normally restricted venues",
      "Personalized experiences tailored to your interests",
      "Focus on quality and exclusivity over quantity"
    ]
  }
};

export const CustomTourDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tour, setTour] = useState<any>(null);
  const [expandedHighlights, setExpandedHighlights] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tourType: '',
    message: '',
    preferredDate: ''
  });

  useEffect(() => {
    if (id && tourData[id as keyof typeof tourData]) {
      setTour(tourData[id as keyof typeof tourData]);
      setFormData(prev => ({ ...prev, tourType: id }));
    }
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  const toggleHighlight = (index: number) => {
    if (expandedHighlights.includes(index)) {
      setExpandedHighlights(expandedHighlights.filter(i => i !== index));
    } else {
      setExpandedHighlights([...expandedHighlights, index]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert(`Thank you for your interest in ${tour?.title}! We'll contact you shortly.`);
    // Reset form
    setFormData({
      name: '',
      email: '',
      tourType: id || '',
      message: '',
      preferredDate: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tour Not Found</h2>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-blue-600 text-white rounded-full"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleBack}
        className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeftIcon className="w-6 h-6 text-gray-800" />
      </motion.button>

      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="w-full h-full overflow-hidden">
          <img
            src={tour.mainImage}
            alt={tour.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {tour.title}
          </h1>
          <p className="text-xl text-gray-200">{tour.subtitle}</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Experience</h2>
              <p className="text-gray-600 leading-relaxed">
                {tour.description}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience Highlights</h2>
              <div className="space-y-6">
                {tour.highlights.map((highlight: any, index: number) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="p-4 cursor-pointer" onClick={() => toggleHighlight(index)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CameraIcon className="w-5 h-5 text-blue-600 mr-3" />
                          <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
                        </div>
                        {expandedHighlights.includes(index) ? 
                          <ChevronUpIcon className="w-5 h-5 text-gray-600" /> : 
                          <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                        }
                      </div>
                    </div>
                    
                    {expandedHighlights.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200"
                      >
                        <div className="p-4 pt-2">
                          <p className="text-gray-600 mb-4">{highlight.description}</p>
                          
                          {/* Photos for this highlight */}
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            {highlight.images && highlight.images.map((img: string, imgIndex: number) => (
                              <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg">
                                <img
                                  src={img}
                                  alt={`${highlight.title} ${imgIndex + 1}`}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This Experience</h2>
              <ul className="space-y-3">
                {tour.whyChoose.map((reason: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="p-6 border border-yellow-200 bg-yellow-50 rounded-xl"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">Important Information</h3>
              <p className="text-gray-600">
                All tours require advance booking and are subject to availability. Corporate visits require 
                special arrangements and may need 2-4 weeks notice. Professional filming requires additional 
                permits. Contact us for specific requirements and timing.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sticky top-24"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request More Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <MapIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Tour Date
                </label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message / Specific Requirements
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your interests, group size, specific requirements..."
                />
              </div>

              <input type="hidden" name="tourType" value={formData.tourType} />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Inquiry
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                We'll respond within 24 hours with more details and availability.
              </p>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Other Ways to Contact</h3>
              <div className="space-y-2">
                <p className="text-gray-600">📧 Email: tours@shanghaijourney.com</p>
                <p className="text-gray-600">📱 WeChat: ShanghaiJourney</p>
                <p className="text-gray-600">☎️ Phone: +86 21 1234 5678</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};