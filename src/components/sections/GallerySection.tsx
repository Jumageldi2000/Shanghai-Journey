// src/components/sections/GallerySection.tsx - 更新版
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { galleryImages, galleryDescriptions, galleryTitles } from '../../data/stats';

export const GallerySection: React.FC = () => {
  const navigate = useNavigate();

  const handleCityClick = (id: number) => {
    navigate(`/city/${id}`);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
              <span className="text-emerald-500"> Destinations</span>
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
          className="h-96"
        >
          {galleryImages.map((img, index: number) => (
            <SwiperSlide key={index} className="!w-96">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-full rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => handleCityClick(index + 1)}
              >
                <img 
                  src={img} 
                  alt={`Shanghai ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{galleryTitles[index]}</h3>
                    <p className="mb-3">{galleryDescriptions[index]}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm hover:bg-white/30 transition-colors"
                    >
                      Explore →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};