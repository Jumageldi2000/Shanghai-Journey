// src/pages/DestinationsPage.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  MapPinIcon, 
  FunnelIcon,
  XMarkIcon,
  ChevronRightIcon,
  BuildingLibraryIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

// 目的地数据 - 更简洁的信息
const destinationsData = [
  {
    id: 1,
    title: "The Bund",
    description: "Shanghai's iconic waterfront showcasing colonial history and modern skyline",
    city: "Shanghai",
    image: "/images/destinations/上海外滩万国建筑群.jpeg",
    type: "Historical Landmark"
  },
  {
    id: 2,
    title: "West Lake",
    description: "UNESCO World Heritage site with scenic beauty and serene gardens",
    city: "Hangzhou", 
    image: "/images/destinations/杭州西湖雷峰塔.jpg",
    type: "Natural Scenery"
  },
  {
    id: 3,
    title: "Humble Administrator's Garden",
    description: "Largest classical garden representing Ming Dynasty garden design",
    city: "Suzhou",
    image: "/images/destinations/苏州平江路.jpg",
    type: "Classical Garden"
  },
  {
    id: 4,
    title: "Wuzhen Water Town",
    description: "Beautifully preserved ancient water town with traditional architecture",
    city: "Wuzhen",
    image: "/images/destinations/乌镇西栅夜景.jpeg",
    type: "Ancient Town"
  },
  {
    id: 5,
    title: "Lujiazui Financial District",
    description: "Shanghai's futuristic skyline with iconic skyscrapers",
    city: "Shanghai",
    image: "/images/destinations/陆家嘴建筑.jpeg",
    type: "Modern Architecture"
  },
  {
    id: 6,
    title: "Lingyin Temple",
    description: "One of the largest Buddhist temples in China dating back to 328 AD",
    city: "Hangzhou",
    image: "/images/destinations/灵隐寺.jpeg",
    type: "Religious Site"
  },
  {
    id: 7,
    title: "Tiger Hill",
    description: "Known as 'the Number One Scenic Spot in Suzhou' with leaning pagoda",
    city: "Suzhou",
    image: "/images/destinations/tiger-hill.png",
    type: "Historical Site"
  },
  {
    id: 8,
    title: "Ancient Canals",
    description: "Traditional canal life with boat rides through ancient waterways",
    city: "Wuzhen",
    image: "/images/destinations/乌镇西栅鞥景区.jpeg",
    type: "Cultural Experience"
  }
];

const cities = Array.from(new Set(destinationsData.map(d => d.city)));
const types = Array.from(new Set(destinationsData.map(d => d.type)));

export const DestinationsPage: React.FC = () => {
  const navigate = useNavigate();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filteredDestinations = destinationsData.filter(destination => {
    if (selectedCities.length > 0 && !selectedCities.includes(destination.city)) {
      return false;
    }
    if (selectedTypes.length > 0 && !selectedTypes.includes(destination.type)) {
      return false;
    }
    return true;
  });

  const handleViewDetails = (id: number) => {
    navigate(`/destination/${id}`);
  };

  const toggleCity = (city: string) => {
    setSelectedCities(prev => 
      prev.includes(city) 
        ? prev.filter(c => c !== city) 
        : [...prev, city]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const clearAllFilters = () => {
    setSelectedCities([]);
    setSelectedTypes([]);
  };

  const hasActiveFilters = selectedCities.length > 0 || selectedTypes.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
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
                  <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
                  <span className="text-sm font-medium text-gray-500">Destinations</span>
                </div>
              </li>
            </ol>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Destinations
              </h1>
              <p className="text-gray-600">
              Discover hand-picked destinations across Eastern China, each with its own story waiting to be explored
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FunnelIcon className="w-5 h-5" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 侧边栏 - 过滤器 */}
          <div className={`lg:block ${filtersOpen ? 'block' : 'hidden'} lg:w-64 flex-shrink-0`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-gray-900">Filter Options</h3>
                {hasActiveFilters && (
                  <button 
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* 城市过滤器 */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPinIcon className="w-5 h-5 text-blue-600" />
                  <h4 className="font-medium text-gray-900">By City</h4>
                </div>
                <div className="space-y-2">
                  {cities.map(city => (
                    <label key={city} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCities.includes(city)}
                        onChange={() => toggleCity(city)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{city}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 类型过滤器 */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <BuildingLibraryIcon className="w-5 h-5 text-blue-600" />
                  <h4 className="font-medium text-gray-900">By Type</h4>
                </div>
                <div className="space-y-2">
                  {types.map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 主内容区 */}
          <div className="flex-1">
            {/* 活跃过滤器标签 */}
            {hasActiveFilters && (
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedCities.map(city => (
                  <span 
                    key={city} 
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {city}
                    <button 
                      onClick={() => toggleCity(city)}
                      className="ml-1"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </span>
                ))}
                {selectedTypes.map(type => (
                  <span 
                    key={type} 
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {type}
                    <button 
                      onClick={() => toggleType(type)}
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
                Showing <span className="font-medium">{filteredDestinations.length}</span> of{' '}
                <span className="font-medium">{destinationsData.length}</span> destinations
              </p>
            </div>

            {/* 目的地网格 - 简洁的信息卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  onClick={() => handleViewDetails(destination.id)}
                  className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
                >
                  {/* 图片区域 */}
                  <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                    {destination.image ? (
                      <img
                        src={destination.image}
                        alt={destination.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <PhotoIcon className="w-12 h-12 text-blue-300" />
                      </div>
                    )}
                    
                    {/* 城市标签 */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-blue-700">{destination.city}</span>
                    </div>
                    
                    {/* 类型标签 */}
                    <div className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-white">{destination.type}</span>
                    </div>
                  </div>

                  {/* 内容区域 */}
                  <div className="p-5">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {destination.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {destination.description}
                      </p>
                    </div>

                    {/* 查看详情按钮 */}
                    <div className="pt-3 border-t border-gray-100">
                      <button className="w-full py-2 text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center justify-center gap-2">
                        View Details
                        <ChevronRightIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 空状态 */}
            {filteredDestinations.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <MapPinIcon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No destinations found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                <button
                  onClick={clearAllFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};