// src/components/pages/CityDetail.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  HeartIcon, 
  MapPinIcon, 
  TruckIcon,
  HomeIcon,
  CakeIcon,
  CameraIcon,
  CalendarIcon,
  StarIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

interface CityInfo {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  mainImage: string;
  gallery: string[];
  location: string;
  bestSeason: string;
  travelTime: string;
  highlights: string[];
  mustTryFoods: { name: string; description: string; }[];
  accommodations: { type: string; price: string; recommendation: string; }[];
  tags: string[];
  rating: number;
  reviews: number;
  distanceFromShanghai: string;
}

const cityData: CityInfo[] = [
   {
     id: 1,
     title: "Lujiazui Skyline",
     subtitle: "The Financial Heart of Modern Shanghai",
     description: "Lujiazui Financial District is Shanghai's central business area, home to the city's tallest skyscrapers including Shanghai Tower, Shanghai World Financial Center, and Jin Mao Tower. As China's financial hub, it stands as a vertical museum of urban development since China's economic reforms.",
     mainImage: "/images/gallery/上海陆家嘴建筑.jpeg",
     gallery: [
       "/images/gallery/上海陆家嘴建筑.jpeg",
       "/images/attractions/上海东方明珠.jpg",
       "/images/attractions/上海外滩万国建筑群.jpg"
     ],
     location: "Pudong District, Shanghai",
     bestSeason: "Spring & Autumn (March-May, Sept-Nov)",
     travelTime: "Within Shanghai, accessible via Metro Line 2",
     highlights: [
       "Visit Shanghai Tower's 118th floor observation deck",
       "Walk along Binjiang Avenue for panoramic Bund views",
       "Tour the Oriental Pearl Radio & TV Tower",
       "Experience Jin Mao Tower's 88th floor skywalk"
     ],
     mustTryFoods: [
       { name: "Soup Dumplings (Xiaolongbao)", description: "Thin-skinned, juicy dumplings" },
       { name: "Shanghai-Style Dishes", description: "Local cuisine with rich sauces" },
       { name: "Crab Roe Tofu", description: "Seasonal autumn specialty" }
     ],
     accommodations: [
       { type: "Luxury Hotels", price: "¥1500-5000", recommendation: "Pudong Shangri-La, Grand Hyatt Jin Mao" },
       { type: "Boutique Hotels", price: "¥800-1500", recommendation: "Park Hyatt Shanghai, W Hotel The Bund" },
       { type: "Budget", price: "¥300-800", recommendation: "Home Inn, Hanting chain hotels" }
     ],
     tags: ["Modern City", "Financial Hub", "Skyscrapers", "Night View"],
     rating: 4.9,
     reviews: 2345,
     distanceFromShanghai: "0km (Within Shanghai)"
   },
   {
     id: 2,
     title: "Longjing Tea Fields",
     subtitle: "Hangzhou's Green Poetry",
     description: "Longjing Village in Hangzhou's West Lake area is world-famous for producing premium Longjing tea. The terraced tea fields create stunning seasonal landscapes. During spring harvest, tea farmers move through emerald-green bushes while fresh tea aromas fill the air.",
     mainImage: "/images/gallery/杭州龙井村.jpeg",
     gallery: [
       "/images/gallery/杭州龙井村.jpeg",
       "/images/gallery/龙井村2.jpg",
       "/images/gallery/龙井村3.jpg"
     ],
     location: "West Lake District, Hangzhou, Zhejiang",
     bestSeason: "Spring (March-April tea harvest season)",
     travelTime: "1 hour by high-speed train from Shanghai",
     highlights: [
       "Tea picking experience in Longjing tea fields",
       "Authentic West Lake Longjing tea tasting",
       "Hike along Nine Creeks Meandering Trail",
       "Visit China National Tea Museum"
     ],
     mustTryFoods: [
       { name: "West Lake Fish in Vinegar", description: "Hangzhou's classic sweet-sour fish" },
       { name: "Longjing Shrimp", description: "Shrimp infused with tea aroma" },
       { name: "Beggar's Chicken", description: "Fragrant traditional delicacy" }
     ],
     accommodations: [
       { type: "Tea Field Homestays", price: "¥500-1200", recommendation: "Longjing Village guesthouses" },
       { type: "Resort Hotels", price: "¥800-2000", recommendation: "West Lake State Guesthouse, Four Seasons Hangzhou" },
       { type: "Budget", price: "¥200-500", recommendation: "Chain hotels in Hangzhou city" }
     ],
     tags: ["Natural Scenery", "Tea Culture", "Countryside", "Cultural Heritage"],
     rating: 4.7,
     reviews: 1890,
     distanceFromShanghai: "180km"
   },
   {
     id: 3,
     title: "Pingjiang Historic Street",
     subtitle: "Suzhou's Water Town Memory",
     description: "Pingjiang Road is Suzhou's best-preserved historic district with over 800 years of history. It maintains the ancient city layout of 'parallel waterways and adjacent streets'—classic Jiangnan water town scenery with small bridges, flowing water, white walls, and black tiles.",
     mainImage: "/images/gallery/苏州平江路.jpeg",
     gallery: [
       "/images/gallery/苏州平江路.jpeg",
       "/images/gallery/平江路2.jpg",
       "/images/gallery/平江路3.jpg"
     ],
     location: "Gusu District, Suzhou, Jiangsu",
     bestSeason: "Spring & Autumn",
     travelTime: "30 minutes by high-speed train from Shanghai",
     highlights: [
       "Stroll along Pingjiang Road's stone-paved streets",
       "Take a traditional rowboat tour through canals",
       "Visit Suzhou Pingtan Museum",
       "Sample traditional Suzhou snacks"
     ],
     mustTryFoods: [
       { name: "Squirrel-Shaped Mandarin Fish", description: "Classic Suzhou dish shaped like a squirrel" },
       { name: "Suzhou-Style Noodles", description: "Thin noodles with various toppings" },
       { name: "Pan-Fried Pork Buns", description: "Crispy-bottomed, juicy buns" }
     ],
     accommodations: [
       { type: "Historic Inns", price: "¥400-900", recommendation: "Pingjiang Road boutique inns" },
       { type: "Boutique Hotels", price: "¥600-1500", recommendation: "Pingjiangfu Hotel Suzhou" },
       { type: "Budget", price: "¥200-400", recommendation: "Chain hotels in Suzhou city" }
     ],
     tags: ["Water Town", "Historic District", "Cultural Heritage", "Slow Living"],
     rating: 4.8,
     reviews: 2100,
     distanceFromShanghai: "100km"
   },
   {
     id: 4,
     title: "Wuzhen Water Town",
     subtitle: "China's Last Waterbound Residence",
     description: "Wuzhen is one of Jiangnan's six ancient towns, known as 'China's last waterbound residence.' Xizha Scenic Area preserves the complete water town layout from late Qing and Republic periods—interconnected canals, ancient bridges, and picturesque scenes at every turn.",
     mainImage: "/images/gallery/乌镇西栅景区.jpeg",
     gallery: [
       "/images/gallery/乌镇西栅景区.jpeg",
       "/images/gallery/乌镇2.jpg",
       "/images/gallery/乌镇3.jpg"
     ],
     location: "Tongxiang City, Jiaxing, Zhejiang",
     bestSeason: "Spring & Autumn (avoid holidays)",
     travelTime: "2 hours by bus from Shanghai",
     highlights: [
       "Night cruise through illuminated Xizha",
       "Visit Mu Xin Art Museum",
       "Experience traditional indigo dyeing",
       "Ride a Wupeng boat through waterways"
     ],
     mustTryFoods: [
       { name: "Wuzhen Soy Sauce Duck", description: "Red-glazed, savory duck" },
       { name: "Dingsheng Cake", description: "Traditional cake symbolizing success" },
       { name: "White Water Fish", description: "Fresh Taihu Lake specialty" }
     ],
     accommodations: [
       { type: "Water Town Homestays", price: "¥300-800", recommendation: "Xizha Scenic Area inns" },
       { type: "Resort Hotels", price: "¥600-1200", recommendation: "Wuzhen Waterfront Resort" },
       { type: "Budget", price: "¥150-300", recommendation: "Hotels in Wuzhen town" }
     ],
     tags: ["Ancient Water Town", "Night View", "Cultural Heritage", "Photography Spot"],
     rating: 4.6,
     reviews: 1950,
     distanceFromShanghai: "130km"
   }
 ];

export const CityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [city, setCity] = useState<CityInfo | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundCity = cityData.find(c => c.id === Number(id));
      if (foundCity) {
        setCity(foundCity);
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

  const handlePlanTrip = () => {
    alert(`Planning your trip to ${city?.title}!`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!city) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">City Not Found</h2>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full"
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
          className="relative h-[50vh] overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={city.gallery[currentImageIndex] || city.mainImage}
              alt={city.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {city.title}
                  </h1>
                  <p className="text-xl text-emerald-200 mb-3">{city.subtitle}</p>
                  <div className="flex items-center space-x-6 text-white/90">
                    <div className="flex items-center">
                      <MapPinIcon className="w-5 h-5 mr-2" />
                      <span>{city.location}</span>
                    </div>
                    <div className="flex items-center">
                      <TruckIcon className="w-5 h-5 mr-2" />
                      <span>{city.distanceFromShanghai} from Shanghai</span>
                    </div>
                    <div className="flex items-center">
                      <StarIcon className="w-5 h-5 mr-2 text-yellow-400" />
                      <span>{city.rating} ({city.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlanTrip}
                  className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Plan Trip
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-6xl mx-auto px-6 -mt-8 relative z-20"
        >
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
            {/* Tags */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {city.tags.map((tag: string, index: number) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Details */}
                <div className="lg:col-span-2 space-y-8">
                  {/* City Introduction */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 dark:text-white flex items-center">
                      <MapPinIcon className="w-6 h-6 mr-2 text-emerald-600" />
                      City Overview
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {city.description}
                    </p>
                  </motion.div>

                  {/* Basic Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl"
                    >
                      <div className="flex items-center mb-4">
                        <CalendarIcon className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-bold dark:text-white">Best Season to Visit</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{city.bestSeason}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl"
                    >
                      <div className="flex items-center mb-4">
                        <TruckIcon className="w-6 h-6 text-orange-600 mr-3" />
                        <h3 className="text-lg font-bold dark:text-white">Travel Time</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{city.travelTime}</p>
                    </motion.div>
                  </div>

                  {/* Must-See Highlights */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-white">Top Attractions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {city.highlights.map((highlight: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 + index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-white dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600"
                        >
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3" />
                            <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Photo Gallery */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-white flex items-center">
                      <CameraIcon className="w-6 h-6 mr-2" />
                      Photo Gallery
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {city.gallery.map((img: string, index: number) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => handleImageSelect(index)}
                          className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer ${
                            currentImageIndex === index ? 'ring-4 ring-emerald-500' : ''
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${city.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {currentImageIndex === index && (
                            <div className="absolute inset-0 bg-emerald-500/20" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right: Practical Info */}
                <div className="space-y-6">
                  {/* Food Recommendations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg"
                  >
                    <h3 className="text-xl font-bold mb-6 dark:text-white flex items-center">
                      <CakeIcon className="w-6 h-6 mr-2" />
                      Must-Try Foods
                    </h3>
                    
                    <div className="space-y-4">
                      {city.mustTryFoods.map((food, index: number) => (
                        <motion.div
                          key={food.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.1 + index * 0.1 }}
                          className="bg-white dark:bg-gray-700 p-4 rounded-xl"
                        >
                          <div className="font-bold text-lg dark:text-white mb-1">{food.name}</div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{food.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Accommodation Recommendations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg"
                  >
                    <h3 className="text-xl font-bold mb-6 dark:text-white flex items-center">
                      <HomeIcon className="w-6 h-6 mr-2" />
                      Where to Stay
                    </h3>
                    
                    <div className="space-y-4">
                      {city.accommodations.map((acc, index: number) => (
                        <motion.div
                          key={acc.type}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.6 + index * 0.1 }}
                          className="bg-white dark:bg-gray-700 p-4 rounded-xl"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-bold dark:text-white">{acc.type}</div>
                            <div className="text-emerald-600 font-bold">{acc.price}/night</div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{acc.recommendation}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Travel Tips */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg"
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-white flex items-center">
                      <UsersIcon className="w-6 h-6 mr-2" />
                      Travel Tips
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                        <span>Allow 2-3 days for in-depth exploration</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                        <span>Avoid holiday peak periods</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                        <span>Book accommodations and transport in advance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3" />
                        <span>Bring comfortable walking shoes</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Related City Recommendations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-white">More East China Cities to Explore</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cityData
                .filter(c => c.id !== city.id)
                .slice(0, 3)
                .map((relatedCity, index: number) => (
                  <motion.div
                    key={relatedCity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.4 + index * 0.2 }}
                    whileHover={{ y: -10 }}
                    onClick={() => navigate(`/city/${relatedCity.id}`)}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedCity.mainImage}
                        alt={relatedCity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg dark:text-white mb-2">{relatedCity.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{relatedCity.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-emerald-600 font-semibold">{relatedCity.distanceFromShanghai} from Shanghai</span>
                        <div className="flex items-center">
                          <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm">{relatedCity.rating}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="h-20" />
      </div>
    </div>
  );
};