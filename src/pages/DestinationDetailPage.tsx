// src/pages/DestinationDetailPage.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  MapPinIcon,
  CalendarIcon,
  StarIcon,
  PhotoIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

// 模拟目的地详情数据 - 在实际应用中可能来自API
const destinationsDetailData = [
  {
    id: 1,
    title: "The Bund",
    description: "Shanghai's iconic waterfront, where historic colonial buildings stand across the river from a futuristic skyline. A place that embodies the city's character—where every visit reveals something new.",
    city: "Shanghai",
    type: "Historical Landmark",
    rating: 4.8,
    duration: "2-3 hours",
    bestTime: "Early morning or evening for the best light",
    priceRange: "Free to visit",
    image: "/images/destinations/上海外滩万国建筑群.jpeg",
    gallery: [
      "/images/destinations/上海外滩黄浦江.jpeg",
      "/images/destinations/上海外滩.jpeg",
      "/images/destinations/和平饭店.jpeg"
    ],
    highlights: [
      "Colonial-era architecture from various European styles",
      "Stunning views of Lujiazui skyline across Huangpu River",
      "Perfect for photography at golden hour",
      "Historic buildings housing luxury brands and restaurants"
    ],
    tips: [
      "Visit in the evening to see both day and night views",
      "Take a Huangpu River cruise for a different perspective",
      "Weekday mornings are less crowded",
      "Wear comfortable shoes for walking along the waterfront"
    ],
    address: "Zhongshan East 1st Road, Huangpu District, Shanghai",
    relatedTours: [1, 2, 4] // Related tour IDs
  },
  {
    id: 2,
    title: "West Lake",
    description: "A UNESCO World Heritage site in Hangzhou, famous for its scenic beauty, historic pagodas, and serene gardens. West Lake has inspired poets, artists, and scholars for centuries.",
    city: "Hangzhou", 
    type: "Natural Scenery",
    rating: 4.9,
    duration: "Half day",
    bestTime: "Spring for cherry blossoms, autumn for pleasant weather",
    priceRange: "Free to visit",
    image: "/images/destinations/west-lake.jpg",
    gallery: [
      "/images/destinations/west-lake-1.jpg",
      "/images/destinations/west-lake-2.jpg",
      "/images/destinations/west-lake-3.jpg"
    ],
    highlights: [
      "Ten famous scenes of West Lake including Autumn Moon",
      "Leifeng Pagoda with panoramic views",
      "Su Causeway lined with peach and willow trees",
      "Traditional boat rides on the lake"
    ],
    tips: [
      "Rent a bicycle to explore the entire lake area",
      "Visit early to avoid crowds",
      "Try Longjing tea at lakeside teahouses",
      "Don't miss the musical fountain show in the evening"
    ],
    address: "West Lake, Xihu District, Hangzhou, Zhejiang",
    relatedTours: [1, 5] // Related tour IDs
  },
  {
    id: 3,
    title: "Humble Administrator's Garden",
    description: "The largest classical garden in Suzhou, representing the pinnacle of Chinese garden design from the Ming Dynasty. It's a masterpiece of Chinese landscape architecture.",
    city: "Suzhou",
    type: "Classical Garden",
    rating: 4.7,
    duration: "2-3 hours",
    bestTime: "April-May for blooming flowers",
    priceRange: "CNY 70-90",
    image: "/images/destinations/suzhou-garden.jpg",
    gallery: [
      "/images/destinations/suzhou-garden-1.jpg",
      "/images/destinations/suzhou-garden-2.jpg",
      "/images/destinations/suzhou-garden-3.jpg"
    ],
    highlights: [
      "Traditional Chinese pavilions and corridors",
      "Beautifully designed ponds and rockeries",
      "Lotus flowers in summer",
      "Classical Chinese landscaping techniques"
    ],
    tips: [
      "Hire a guide to understand the garden's symbolism",
      "Visit during weekdays to avoid crowds",
      "Spring and autumn offer the best views",
      "Allow at least 2 hours for a proper visit"
    ],
    address: "178 Dongbei Street, Gusu District, Suzhou, Jiangsu",
    relatedTours: [1, 5] // Related tour IDs
  }
];

// 相关旅游线路数据
const relatedToursData = [
  {
    id: 1,
    title: "East China Classic Tour",
    duration: "9 Days / 8 Nights",
    description: "Visit The Bund, West Lake, and Classical Gardens in one comprehensive tour",
    price: "From $1,500",
    image: "/images/tours/杭州西湖雷峰塔.jpg",
    rating: 4.9
  },
  {
    id: 2,
    title: "Shanghai City Experience",
    duration: "3 Days / 2 Nights",
    description: "Perfect tour for exploring The Bund and other Shanghai highlights",
    price: "From $450",
    image: "/images/tours/上海南京路步行街.jpeg",
    rating: 4.7
  },
  {
    id: 4,
    title: "Shanghai Tech & Innovation",
    duration: "2 Days / 1 Night",
    description: "Combine The Bund visit with Shanghai's modern innovation scene",
    price: "From $350",
    image: "/images/tours/tech-media.jpeg",
    rating: 4.6
  },
  {
    id: 5,
    title: "Ancient Water Towns",
    duration: "3 Days / 2 Nights",
    description: "Explore Suzhou gardens and ancient water towns",
    price: "From $500",
    image: "/images/tours/苏州平江路.jpg",
    rating: 4.7
  }
];

export const DestinationDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const destinationId = parseInt(id || '1');
  const destination = destinationsDetailData.find(d => d.id === destinationId) || destinationsDetailData[0];
  
  // 获取相关旅游线路
  const relatedTours = relatedToursData.filter(tour => 
    destination.relatedTours.includes(tour.id)
  );

  const handleBack = () => {
    navigate('/destinations');
  };

  const handleViewTour = (tourId: number) => {
    navigate(`/tour/${tourId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Destinations</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* 主要内容区 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* 面包屑导航 */}
          <div className="mb-6">
            <nav className="flex text-sm text-gray-600">
              <button 
                onClick={() => navigate('/')}
                className="hover:text-blue-600"
              >
                Home
              </button>
              <span className="mx-2">/</span>
              <button 
                onClick={() => navigate('/destinations')}
                className="hover:text-blue-600"
              >
                Destinations
              </button>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{destination.title}</span>
            </nav>
          </div>

          {/* 标题和基本信息 */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  {destination.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">{destination.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <span className="font-medium">{destination.rating}</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {destination.type}
                  </span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 w-full md:w-auto">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{destination.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500">Best Time to Visit</p>
                      <p className="font-medium">{destination.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CurrencyDollarIcon className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500">Price Range</p>
                      <p className="font-medium">{destination.priceRange}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 主图片 */}
            <div className="mb-8">
              <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
                {destination.image ? (
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <PhotoIcon className="w-20 h-20 text-blue-300" />
                  </div>
                )}
              </div>
            </div>

            {/* 描述区域 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 主描述 */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                  <div className="flex items-center gap-2 mb-6">
                    <InformationCircleIcon className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">About {destination.title}</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {destination.description}
                  </p>
                  
                  {/* 地址 */}
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-3">Address</h3>
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="w-5 h-5 text-blue-500 mt-1" />
                      <p className="text-gray-700">{destination.address}</p>
                    </div>
                  </div>

                  {/* 亮点 */}
                  <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-4">Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {destination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-700">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 小贴士 */}
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">Travel Tips</h3>
                    <div className="space-y-3">
                      {destination.tips.map((tip, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg p-4">
                          <p className="text-gray-700">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 图片画廊 */}
                {destination.gallery && destination.gallery.length > 0 && (
                  <div className="bg-white rounded-xl shadow-sm p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {destination.gallery.map((image, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className={`rounded-lg overflow-hidden cursor-pointer ${
                            selectedImage === index ? 'ring-2 ring-blue-500' : ''
                          }`}
                          onClick={() => setSelectedImage(index)}
                        >
                          <img
                            src={image}
                            alt={`${destination.title} ${index + 1}`}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 侧边栏 - 相关旅游线路 */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                  <div className="flex items-center gap-2 mb-6">
                    <UserGroupIcon className="w-6 h-6 text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-900">Related Tours</h2>
                  </div>
                  
                  {relatedTours.length > 0 ? (
                    <div className="space-y-6">
                      {relatedTours.map((tour) => (
                        <motion.div
                          key={tour.id}
                          whileHover={{ y: -4 }}
                          onClick={() => handleViewTour(tour.id)}
                          className="group cursor-pointer"
                        >
                          <div className="rounded-lg overflow-hidden mb-3">
                            <img
                              src={tour.image}
                              alt={tour.title}
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {tour.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                            {tour.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <StarIcon className="w-4 h-4 text-yellow-400" />
                              <span className="text-sm font-medium">{tour.rating}</span>
                            </div>
                            <div className="text-blue-600 font-semibold">
                              {tour.price}
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <button className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                              View Tour
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <UserGroupIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500">No related tours available</p>
                    </div>
                  )}
                  
                  {/* 查看更多按钮 */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => navigate('/tours')}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      View All Tours
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};