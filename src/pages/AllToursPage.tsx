// src/pages/AllToursPage.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  CalendarIcon, 
  MapPinIcon, 
  FunnelIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export const AllToursPage: React.FC = () => {
  const navigate = useNavigate();
  const [filtersOpen, setFiltersOpen] = useState(false); // 控制过滤器侧边栏的显示状态
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const allTours = [
    {
      id: 1,
      title: "East China Classic Tour",
      subtitle: "Shanghai, Hangzhou, Suzhou & Wuzhen",
      duration: "9 Days / 8 Nights",
      description: "This comprehensive tour takes you through the cultural and modern highlights of East China. Experience the perfect blend of ancient traditions and contemporary innovation, from Shanghai's cosmopolitan flair to Hangzhou's scenic beauty and Suzhou's classical gardens.",
      image: "/images/tours/杭州西湖雷峰塔.jpg",
      highlights: ["Shanghai Skyline", "West Lake", "Classical Gardens", "Water Towns"],
      tags: ["Best Seller", "Cultural"],
      price: "Contact for price",
      rating: 4.9,
      destinations: ["Shanghai", "Hangzhou", "Suzhou", "Wuzhen"],
      category: "Cultural"
    },
    {
      id: 2,
      title: "Shanghai City Experience",
      subtitle: "Modern Metropolis & Hidden Gems",
      duration: "3 Days / 2 Nights",
      description: "Discover the many faces of Shanghai in this intensive city tour.",
      image: "/images/tours/上海南京路步行街.jpeg",
      highlights: ["The Bund", "Yu Garden", "Lujiazui", "French Concession"],
      tags: ["Day Tour", "Historic"],
      price: "Contact for price",
      rating: 4.7,
      destinations: ["Shanghai"],
      category: "City Tour"
    },
    {
      id: 3,
      title: "Gourmet Shanghai",
      subtitle: "Food & Culture Experience",
      duration: "3 Days / 2 Nights",
      description: "A culinary journey through Shanghai, tasting traditional Shanghainese cuisine and learning about food culture.",
      image: "/images/tours/小笼包.jpg",
      highlights: ["Local Markets", "Cooking Classes", "Food Streets"],
      tags: ["Food Tour", "Cultural"],
      price: "Contact for price",
      rating: 4.8,
      destinations: ["Shanghai"],
      category: "Food & Drink"
    },
    {
      id: 4,
      title: "Shanghai Tech & Innovation",
      subtitle: "Digital Media & Technology Experience",
      duration: "2 Days / 1 Night",
      description: "Explore Shanghai's cutting-edge technology scene with visits to innovative companies and digital media studios.",
      image: "/images/tours/tech-media.jpeg",
      highlights: ["Tech Visits", "Innovation Labs", "Digital Studios"],
      tags: ["Tech", "Business"],
      price: "Contact for price",
      rating: 4.6,
      destinations: ["Shanghai"],
      category: "Tech & Business"
    },
    {
      id: 5,
      title: "Ancient Water Towns",
      subtitle: "Suzhou & Wuzhen Heritage Tour",
      duration: "3 Days / 2 Nights",
      description: "Discover the charm of ancient water towns with traditional architecture, canals, and cultural experiences.",
      image: "/images/tours/苏州平江路.jpg",
      highlights: ["Ancient Canals", "Traditional Architecture", "Boat Rides"],
      tags: ["Heritage", "Scenic"],
      price: "Contact for price",
      rating: 4.7,
      destinations: ["Suzhou", "Wuzhen"],
      category: "Cultural"
    },
    {
      id: 6,
      title: "Shenzhen Gateway Tour",
      subtitle: "Modern Metropolis & Innovation Hub",
      duration: "2 Days / 1 Night",
      description: "Experience the vibrant, fast-paced life of Shenzhen, China's most innovative city.",
      image: "/images/tours/深圳.jpg",
      highlights: ["City Skyline", "Innovation Parks", "Shopping"],
      tags: ["Modern", "Tech"],
      price: "Contact for price",
      rating: 4.8,
      destinations: ["Shenzhen"],
      category: "Modern Cities"
    }
  ];

  // ... (keep your filter logic functions unchanged) ...
  const allowedDestinations = new Set(["Shanghai", "Hangzhou", "Suzhou", "Wuzhen", "Shenzhen"]);
  const destinations = Array.from(
    new Set(
      allTours
        .flatMap(tour => tour.destinations)
        .filter(dest => allowedDestinations.has(dest))
    )
  );
  const categories = Array.from(new Set(allTours.map(tour => tour.category)));
  const mainDestinations = ["Shanghai", "Shenzhen", "Hangzhou", "Suzhou"];
  const sortedDestinations = [
    ...mainDestinations.filter(dest => destinations.includes(dest)),
    ...destinations.filter(dest => !mainDestinations.includes(dest))
  ];
  const mainCategories = ["Cultural", "Day Tours", "Tech & Business", "Modern Cities", "Food & Drink", "City Tour"];
  const sortedCategories = [
    ...mainCategories.filter(cat => categories.includes(cat)),
    ...categories.filter(cat => !mainCategories.includes(cat))
  ];

  const filteredTours = allTours.filter(tour => {
    const tourDestinations = tour.destinations.filter(dest => allowedDestinations.has(dest));
    if (selectedDestinations.length > 0 && !selectedDestinations.some(dest => tourDestinations.includes(dest))) {
      return false;
    }
    if (selectedCategories.length > 0 && !selectedCategories.includes(tour.category)) {
      return false;
    }
    return true;
  });

  const handleTourClick = (tourId: number) => {
    navigate(`/tour/${tourId}`);
  };

  const toggleDestination = (destination: string) => {
    setSelectedDestinations(prev => 
      prev.includes(destination) 
        ? prev.filter(d => d !== destination) 
        : [...prev, destination]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const clearAllFilters = () => {
    setSelectedDestinations([]);
    setSelectedCategories([]);
  };

  const hasActiveFilters = selectedDestinations.length > 0 || selectedCategories.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <button 
                  onClick={() => navigate('/')}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Home
                </button>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm font-medium text-gray-500">All Tours</span>
                </div>
              </li>
            </ol>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Discover Our Tours
              </h1>
              <p className="text-gray-600">
                Explore our handpicked selection of experiences in Eastern China & Shenzhen.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              {/* 修改后的 Filters 按钮，现在绑定了 open/close 功能 */}
              <button
                onClick={() => setFiltersOpen(!filtersOpen)} // 切换 filtersOpen 状态
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FunnelIcon className="w-5 h-5" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 侧边栏 - 过滤器 */}
          {/* 修改了这里的条件渲染逻辑 */}
          <div className={`lg:block ${filtersOpen ? 'block' : 'hidden'} lg:w-64 flex-shrink-0`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-gray-900">Filter Tours</h3>
                {hasActiveFilters && (
                  <button 
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* 目的地过滤器 */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">By Destination</h4>
                <div className="space-y-2">
                  {sortedDestinations.map(destination => (
                    <label key={destination} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedDestinations.includes(destination)}
                        onChange={() => toggleDestination(destination)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{destination}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 类别过滤器 */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">By Category</h4>
                <div className="space-y-2">
                  {sortedCategories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 主内容区 - 旅游线路列表 */}
          <div className="flex-1">
            {/* 活跃过滤器标签 */}
            {hasActiveFilters && (
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedDestinations.map(destination => (
                  <span 
                    key={destination} 
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {destination}
                    <button 
                      onClick={() => toggleDestination(destination)}
                      className="ml-1"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </span>
                ))}
                {selectedCategories.map(category => (
                  <span 
                    key={category} 
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {category}
                    <button 
                      onClick={() => toggleCategory(category)}
                      className="ml-1"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* 结果计数 */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-medium">{filteredTours.length}</span> of{' '}
                <span className="font-medium">{allTours.length}</span> tours
              </p>
            </div>

            {/* 旅游线路网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour, index) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => handleTourClick(tour.id)}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center">
                      <span className="text-sm font-bold text-gray-800">★ {tour.rating}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {tour.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center text-gray-600 mb-2">
                        <CalendarIcon className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="text-sm">{tour.duration}</span>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                         <MapPinIcon className="w-4 h-4 mr-1 text-gray-500" />
                        {tour.destinations.join(', ')}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Highlights:</p>
                      <div className="flex flex-wrap gap-2">
                        {tour.highlights.slice(0, 3).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-end mt-auto pt-4">
                      <div></div>
                      <button className="text-blue-700 font-bold hover:underline absolute bottom-4 right-4">
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tours found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters to see more results.</p>
                <button
                  onClick={clearAllFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};