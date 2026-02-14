// src/pages/TourDetail.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  UserIcon,
  CheckCircleIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

// 模拟数据 - 在实际应用中应该从API获取
const tourData = {
  1: {
    id: 1,
    title: "East China Classic Tour",
    subtitle: "Shanghai • Suzhou • Hangzhou • Wuzhen",
    duration: "9 Days / 8 Nights",
    description: "This comprehensive tour takes you through the cultural and modern highlights of East China. Experience the perfect blend of ancient traditions and contemporary innovation, from Shanghai's cosmopolitan flair to Hangzhou's scenic beauty and Suzhou's classical gardens.",
    mainImage: "/images/tours/杭州西湖雷峰塔.jpeg",
    gallery: [
      "/images/tours/premium-culture.jpeg",
      "/images/tours/龙井村.jpeg",
      "/images/tours/上海豫园.jpeg",
      "/images/tours/苏州平江路.jpeg"
    ],
    region: "East China",
    city: "Shanghai",
    category: "Cultural",
    itinerary: [
      {
        day: 1,
        title: "Shanghai",
        activities: [
          "Arrive in Shanghai and begin exploring the city's vibrant center at People's Square, followed by a visit to the Shanghai Urban Planning Exhibition Hall. Continue along the lively Nanjing Road Pedestrian Street toward the historic Bund to admire its skyline and waterfront night views. Guests may optionally enjoy a Huangpu River night cruise to experience Shanghai's dazzling skyline from the water."
        ]
      },
      {
        day: 2,
        title: "Shanghai",
        activities: [
          "Discover the classical beauty of Yu Garden and its surrounding Old Town markets and Chenghuangmiao Temple area. Later, stroll through the charming Former French Concession, exploring Wukang Road and Anfu Road, known for their cafés, boutiques, and Art Deco architecture. Enjoy free time to explore Tianzifang or Xintiandi independently. In the evening, you may choose to attend a Shanghai Circus or ERA acrobatic show."
        ]
      },
      {
        day: 3,
        title: "Shanghai",
        activities: [
          "Admire sweeping city views from the observation deck of the Shanghai World Financial Center, then explore the Lujiazui Financial District, including the Lujiazui Pedestrian Bridge, Sunset Corridor, Duoyun Bookstore, and nearby attractions. The rest of the day is free for shopping, dining, or nightlife at your own pace."
        ]
      },
      {
        day: 4,
        title: "Hangzhou",
        activities: [
          "Travel from Shanghai to Hangzhou. Visit the scenic Leifeng Pagoda and take a boat cruise on West Lake to explore its islands and lakeside gardens. Later, enjoy free time to wander Hefang Street for local snacks or browse the Silk City Market, famous for Hangzhou silk."
        ]
      },
      {
        day: 5,
        title: "Hangzhou",
        activities: [
          "Visit the China National Tea Museum to learn about Chinese tea culture, followed by a stop at Longjing Tea Village to experience tea tasting and take in the terraced fields. Continue with a walk to Jiuxi Village, surrounded by lush tea valleys. In the evening, guests may optionally attend a West Lake outdoor performance, such as Impression West Lake or Enduring Memories of Hangzhou."
        ]
      },
      {
        day: 6,
        title: "Hangzhou",
        activities: [
          "Explore the legendary Lingyin Temple and the Feilai Peak Grottoes, among Hangzhou's most historic Buddhist sites. Enjoy a light vegetarian lunch inside the temple. Later, stroll along Jiuxi Road, a tranquil path lined with streams and greenery. The remainder of the day is free to enjoy at leisure."
        ]
      },
      {
        day: 7,
        title: "Wuzhen",
        activities: [
          "Depart Hangzhou for Wuzhen, one of China's most picturesque ancient water towns. Explore the Xizha (West Gate) Scenic Area, wandering across stone bridges, canals, and charming alleys lined with traditional houses. The evening is free to relax or enjoy the peaceful riverside atmosphere."
        ]
      },
      {
        day: 8,
        title: "Suzhou",
        activities: [
          "Head to Suzhou and visit one of its celebrated classical gardens, the Zhuozheng (Humble Administrator's) Garden, followed by the Suzhou Museum. Later, stroll along Pingjiang Road or Shantang Street, both rich in history and lined with canals, teahouses, and souvenir shops. For those interested, an optional short canal cruise offers a delightful way to admire Suzhou's lit-up waterfront views at night."
        ]
      },
      {
        day: 9,
        title: "Return to Shanghai",
        activities: [
          "Travel back to Shanghai for the end of the journey or onward arrangements."
        ]
      }
    ],
    included: [
      "4* and 5* hotels with breakfast",
      "Transport between cities",
      "Professional English-speaking guide",
      "8 lunches (including one vegetarian lunch at Lingyin Buddhist Temple)",
      "Entrances: Shanghai Urban Planning Exhibition Hall",
      "Entrances: Yu Garden",
      "Entrances: Shanghai World Financial Center observation deck",
      "Entrances: Leifeng Pagoda",
      "Entrances: West Lake boat cruise",
      "Entrances: China National Tea Museum and tea tasting",
      "Entrances: Lingyin Temple and Feilai Peak Grottoes",
      "Entrances: Xizha (West Gate) Scenic Area in Wuzhen",
      "Entrances: Zhuozheng (Humble Administrator's) Garden",
      "Entrances: Suzhou Museum"
    ],
    notIncluded: [
      "Dinners",
      "Flights",
      "Optional experiences: Huangpu River night cruise",
      "Optional experiences: Shanghai Circus or ERA acrobatic show",
      "Optional experiences: West Lake outdoor performance (Impression West Lake or Enduring Memories of Hangzhou)",
      "Optional experiences: Suzhou short canal cruise"
    ],
    priceNote: "Price varies by season and group size. Contact us for exact pricing.",
    groupSize: "2-15 people",
    difficulty: "Easy"
  },
  2: {
    id: 2,
    title: "Shanghai City Experience",
    subtitle: "Modern Metropolis & Hidden Gems",
    duration: "3 Days / 2 Nights",
    description: "Discover the many faces of Shanghai in this intensive city tour.",
    mainImage: "/images/tours/shanghai-city-main.jpg",
    gallery: [
      "/images/tours/shanghai-city-1.jpg",
      "/images/tours/shanghai-city-2.jpg",
      "/images/tours/shanghai-city-3.jpg",
      "/images/tours/shanghai-city-4.jpg"
    ],
    region: "East China",
    city: "Shanghai",
    category: "City Tour",
    itinerary: [
      {
        day: 1,
        title: "Arrival & The Bund",
        activities: [
          "Arrival at Shanghai airport",
          "Check-in at hotel",
          "Evening walk along The Bund",
          "Dinner at local restaurant"
        ]
      },
      {
        day: 2,
        title: "Cultural Shanghai",
        activities: [
          "Visit Yu Garden and bazaar",
          "Explore Old Shanghai streets",
          "Tea ceremony experience",
          "Visit Shanghai Museum"
        ]
      },
      {
        day: 3,
        title: "Modern Shanghai",
        activities: [
          "Visit Lujiazui financial district",
          "Shanghai Tower observation deck",
          "Shopping in Nanjing Road",
          "Departure"
        ]
      }
    ],
    included: [
      "2 nights accommodation in 4-star hotel",
      "Airport transfers",
      "Professional English-speaking guide",
      "All entrance fees to attractions",
      "Daily breakfast and 2 dinners"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Lunches",
      "Personal expenses",
      "Tips for guides and drivers"
    ],
    priceNote: "Price varies by season and group size. Contact us for exact pricing.",
    groupSize: "2-8 people",
    difficulty: "Easy",
    bestSeason: "Spring and Autumn"
  },
  3: {
    id: 3,
    title: "Gourmet Shanghai",
    subtitle: "Food & Culture Experience",
    duration: "3 Days / 2 Nights",
    description: "A culinary journey through Shanghai, tasting traditional Shanghainese cuisine and learning about food culture.",
    mainImage: "/images/tours/food-tour-main.jpg",
    gallery: [
      "/images/tours/food-market.jpg",
      "/images/tours/cooking-class.jpg",
      "/images/tours/local-restaurant.jpg",
      "/images/tours/street-food.jpg"
    ],
    region: "East China",
    city: "Shanghai",
    category: "Food & Drink",
    itinerary: [
      {
        day: 1,
        title: "Market Exploration",
        activities: [
          "Morning visit to local food market",
          "Learn about ingredients",
          "Traditional breakfast experience",
          "Cooking class session"
        ]
      },
      {
        day: 2,
        title: "Street Food Tour",
        activities: [
          "Guided street food tour",
          "Taste various local specialties",
          "Visit famous xiaolongbao restaurants",
          "Dumpling making workshop"
        ]
      },
      {
        day: 3,
        title: "Fine Dining & Departure",
        activities: [
          "Visit Michelin-starred restaurant",
          "Learn about fusion cuisine",
          "Farewell lunch",
          "Departure"
        ]
      }
    ],
    included: [
      "2 nights accommodation in boutique hotel",
      "All meals as per itinerary",
      "Professional food tour guide",
      "Cooking class materials",
      "Transportation for all activities"
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Alcoholic beverages",
      "Personal expenses",
      "Tips for guides and drivers"
    ],
    priceNote: "Price includes all food tastings and meals. Contact us for exact pricing.",
    groupSize: "4-10 people",
    difficulty: "Easy",
    bestSeason: "Year-round"
  },
  // 新增 ID 4: Shanghai Tech & Innovation
  4: {
    id: 4,
    title: "Shanghai Tech & Innovation",
    subtitle: "Digital Media & Technology Experience",
    duration: "2 Days / 1 Night",
    description: "Explore Shanghai's cutting-edge technology scene with visits to innovative companies and digital media studios.",
    mainImage: "/images/tours/tech-media.jpeg",
    gallery: [
      "/images/tours/tech-media.jpeg", // 假设主图就是其中一张
      "/images/tours/shanghai-tech-park.jpg", // 假设的科技园区图
      "/images/tours/digital-studio.jpg", // 假设的数字工作室图
      "/images/tours/innovation-lab.jpg" // 假设的创新实验室图
    ],
    region: "East China",
    city: "Shanghai",
    category: "Tech & Business",
    itinerary: [
      {
        day: 1,
        title: "Innovation & Startups",
        activities: [
          "Morning visit to Zhangjiang Hi-Tech Park",
          "Meet with local tech startups",
          "Lunch at a tech company cafeteria",
          "Afternoon at Xuhui滨江 Biotope for innovation hub insights",
          "Dinner networking event with industry professionals"
        ]
      },
      {
        day: 2,
        title: "Digital Media & Future",
        activities: [
          "Visit to a leading digital media studio",
          "Workshop on digital content creation",
          "Exploring the future of technology exhibit",
          "Check-out and departure"
        ]
      }
    ],
    included: [
      "1 night accommodation in business hotel",
      "Meals as per itinerary",
      "Professional guide with tech background",
      "Transportation for all scheduled activities",
      "Entrance fees to parks and exhibits",
      "Networking dinner"
    ],
    notIncluded: [
      "Flights to/from Shanghai",
      "Personal expenses",
      "Additional meals not mentioned",
      "Tips for guides and drivers"
    ],
    priceNote: "Price includes access to exclusive events and expert talks. Contact us for exact pricing.",
    groupSize: "5-12 people",
    difficulty: "Easy"
  },
  // 新增 ID 5: Ancient Water Towns
  5: {
    id: 5,
    title: "Ancient Water Towns",
    subtitle: "Suzhou & Wuzhen Heritage Tour",
    duration: "3 Days / 2 Nights",
    description: "Discover the charm of ancient water towns with traditional architecture, canals, and cultural experiences.",
    mainImage: "/images/tours/water-town.jpeg",
    gallery: [
      "/images/tours/wuzhen-west-gate.jpg", // 假设的乌镇西栅图
      "/images/tours/suzhou-garden.jpg", // 假设的苏州园林图
      "/images/tours/canal-boat.jpg", // 假设的河道游船图
      "/images/tours/traditional-street.jpg" // 假设的传统街道图
    ],
    region: "East China",
    city: "Suzhou, Wuzhen",
    category: "Cultural",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Wuzhen",
        activities: [
          "Arrive in Wuzhen",
          "Check-in at traditional hotel near Xizha",
          "Afternoon walking tour of Xizha scenic area",
          "Sunset view from canal bridge",
          "Dinner at a local restaurant"
        ]
      },
      {
        day: 2,
        title: "Wuzhen & Suzhou",
        activities: [
          "Morning visit to Dongzha scenic area",
          "Traditional boat ride",
          "Lunch in Wuzhen",
          "Travel to Suzhou",
          "Check-in at hotel",
          "Evening stroll along Pingjiang Road Historical Street",
          "Dinner at a historical teahouse"
        ]
      },
      {
        day: 3,
        title: "Suzhou Gardens & Departure",
        activities: [
          "Visit Humble Administrator's Garden",
          "Lunch break",
          "Explore Suzhou Museum",
          "Last-minute shopping or sightseeing",
          "Check-out and departure"
        ]
      }
    ],
    included: [
      "2 nights accommodation in heritage or traditional-style hotels",
      "Meals as per itinerary",
      "Professional English-speaking guide",
      "Transportation between towns",
      "All entrance fees",
      "Traditional boat ride ticket"
    ],
    notIncluded: [
      "Flights to/from Shanghai",
      "Personal expenses",
      "Tips for guides and drivers",
      "Additional meals not mentioned"
    ],
    priceNote: "Price varies by season and hotel category. Contact us for exact pricing.",
    groupSize: "2-10 people",
    difficulty: "Easy",
    bestSeason: "Spring and Autumn"
  },
  // 新增 ID 6: Shenzhen Gateway Tour
  6: {
    id: 6,
    title: "Shenzhen Gateway Tour",
    subtitle: "Modern Metropolis & Innovation Hub",
    duration: "2 Days / 1 Night",
    description: "Experience the vibrant, fast-paced life of Shenzhen, China's most innovative city.",
    mainImage: "/images/tours/shenzhen-cityscape.jpg",
    gallery: [
      "/images/tours/shenzhen-skyline.jpg", // 假设的深圳天际线图
      "/images/tours/hightech-park-shenzhen.jpg", // 假设的深圳高新区图
      "/images/tours/shenzhen-shopping.jpg", // 假设的深圳购物图
      "/images/tours/futian-border.jpg" // 假设的福田口岸图
    ],
    region: "South China",
    city: "Shenzhen",
    category: "Modern Cities",
    itinerary: [
      {
        day: 1,
        title: "Innovation & Finance",
        activities: [
          "Morning visit to Shenzhen High-Tech Industrial Park",
          "Exploring Tencent or Huawei headquarters area (exterior)",
          "Lunch near Civic Center",
          "Afternoon at Shenzhen Stock Exchange viewing platform",
          "Evening at Window of the World or OCT Harbour for leisure"
        ]
      },
      {
        day: 2,
        title: "Culture & Shopping",
        activities: [
          "Visit to Shenzhen Museum of Contemporary Art and Planning",
          "Lunch in Shekou",
          "Afternoon shopping at Dongmen Pedestrian Street or MixC",
          "Check-out and departure"
        ]
      }
    ],
    included: [
      "1 night accommodation in modern hotel",
      "Meals as per itinerary",
      "Professional English-speaking guide",
      "Transportation for all scheduled activities",
      "All entrance fees to museums and parks"
    ],
    notIncluded: [
      "Flights to/from Shenzhen",
      "Personal expenses",
      "Tips for guides and drivers",
      "Additional meals not mentioned",
      "Shopping expenses"
    ],
    priceNote: "Price varies by season and group size. Contact us for exact pricing.",
    groupSize: "2-12 people",
    difficulty: "Easy"
  }
};

export const TourDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tour, setTour] = useState<any>(null);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const tourId = parseInt(id || '1');
    setTour(tourData[tourId as keyof typeof tourData]); // 使用类型断言确保访问安全
  }, [id]);

  const handleBack = () => {
    navigate('/tours'); // 确保返回按钮链接正确
  };

  const handleInquiry = () => {
    // 这里可以打开联系表单或跳转到联系页面
    alert('Inquiry form would open here. Please contact us for more information.');
  };

  const getPhotoCaption = (index: number, imageUrl: string) => {
    // Simple mapping based on the common image filenames
    if (imageUrl.includes('西湖') || imageUrl.includes('hangzhou') || imageUrl.includes('West_Lake')) {
      return 'Hangzhou - West Lake';
    } else if (imageUrl.includes('豫园') || imageUrl.includes('yuyuan') || imageUrl.includes('Garden')) {
      return 'Shanghai - Yu Garden';
    } else if (imageUrl.includes('外滩') || imageUrl.includes('the_bund') || imageUrl.includes('Bund')) {
      return 'Shanghai - The Bund';
    } else if (imageUrl.includes('龙井') || imageUrl.includes('tea') || imageUrl.includes('Longjing')) {
      return 'Hangzhou - Longjing Tea Village';
    } else if (imageUrl.includes('灵隐寺') || imageUrl.includes('lingyin') || imageUrl.includes('Temple')) {
      return 'Hangzhou - Lingyin Temple';
    } else if (imageUrl.includes('平江') || imageUrl.includes('suzhou') || imageUrl.includes('Pingjiang')) {
      return 'Suzhou - Pingjiang Road';
    } else if (imageUrl.includes('乌镇') || imageUrl.includes('wuzhen') || imageUrl.includes('Wuzhen')) {
      return 'Wuzhen - Ancient Water Town';
    } else if (imageUrl.includes('金融') || imageUrl.includes('lujiazui') || imageUrl.includes('Financial')) {
      return 'Shanghai - Lujiazui Financial District';
    } else if (imageUrl.includes('法租界') || imageUrl.includes('french_concession') || imageUrl.includes('French')) {
      return 'Shanghai - Former French Concession';
    } else if (imageUrl.includes('food') || imageUrl.includes('market') || imageUrl.includes('美食')) {
      return 'Local Food Experience';
    } else if (imageUrl.includes('night') || imageUrl.includes('evening') || imageUrl.includes('夜景')) {
      return 'Evening City Views';
    } else if (imageUrl.includes('tech') || imageUrl.includes('innovation') || imageUrl.includes('digital')) {
      return 'Technology & Innovation Hub';
    } else if (imageUrl.includes('shenzhen') || imageUrl.includes('cityscape')) {
      return 'Shenzhen - Modern Metropolis';
    } else {
      return `Day ${index + 1} - Tour Highlight`;
    }
  };

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading Tour...</h2>
          <p className="text-gray-500">Or tour not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Main Image */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={tour.mainImage}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleBack}
          className="absolute top-6 left-6 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeftIcon className="w-6 h-6 text-gray-800" />
        </motion.button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {tour.title}
            </h1>
            <p className="text-xl text-gray-200 mb-4">{tour.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CalendarIcon className="w-5 h-5 text-white" />
                <span className="text-white">{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <UserIcon className="w-5 h-5 text-white" />
                <span className="text-white">{tour.groupSize}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPinIcon className="w-5 h-5 text-white" />
                <span className="text-white">{tour.city}</span> {/* Changed from difficulty to city */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Tour Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tour Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {tour.description}
              </p>
            </section>

            {/* Itinerary - Like the Croatian site */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day: any, index: number) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <div 
                      className="px-6 py-5 bg-white border-b border-gray-100 cursor-pointer flex justify-between items-center hover:bg-blue-50 transition-colors"
                      onClick={() => setSelectedDay(selectedDay === index ? -1 : index)}
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-md">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            Day {day.day}: {day.title}
                          </h3>
                        </div>
                      </div>
                      <svg 
                        className={`w-6 h-6 text-blue-500 transform transition-transform ${
                          selectedDay === index ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    {selectedDay === index && (
                      <div className="px-6 py-4 bg-white">
                        <p className="text-gray-700">
                          {day.activities.join(' ')}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Tour Gallery */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <PhotoIcon className="w-6 h-6" />
                Tour Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tour.gallery.map((image: string, index: number) => (
                  <div 
                    key={index} 
                    className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`Tour gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Image Modal */}
            {selectedImageIndex !== null && (
              <div 
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImageIndex(null)}
              >
                <div 
                  className="relative w-full max-w-6xl max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10 hover:bg-black/70"
                    onClick={() => setSelectedImageIndex(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 z-10 hover:bg-black/70"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(prev => prev === 0 ? tour.gallery.length - 1 : prev! - 1);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 z-10 hover:bg-black/70"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(prev => prev === tour.gallery.length - 1 ? 0 : prev! + 1);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <div className="relative">
                    <img
                      src={tour.gallery[selectedImageIndex]}
                      alt={`Gallery ${selectedImageIndex + 1}`}
                      className="max-h-[80vh] w-auto mx-auto rounded-lg"
                    />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg">
                      {getPhotoCaption(selectedImageIndex, tour.gallery[selectedImageIndex])}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking & Info */}
          <div className="space-y-6">
            {/* What's Included */}
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Included:</h3>
              <ul className="space-y-2">
                {tour.included.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Not Included */}
            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Not Included:</h3>
              <ul className="space-y-2">
                {tour.notIncluded.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pricing Information</h3>
              <p className="text-gray-600 text-sm mb-4">
                {tour.priceNote}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleInquiry}
                className="w-full py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Request Detailed Quote
              </motion.button>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Have Questions?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Contact us for more information or to customize this tour.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="w-full py-3 border border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};