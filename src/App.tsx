// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParticleEffect } from './components/effects/ParticleEffect';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { CustomToursSection } from './components/sections/CustomToursSection';
import { GallerySection } from './components/sections/GallerySection';
import { AttractionDetail } from './pages/AttractionDetail';
import { CustomToursPage } from './pages/CustomToursPage';
import { CustomTourDetail } from './pages/CustomTourDetail';
import { TourDetail } from './pages/TourDetail';
import {SetToursSection} from './components/sections/SetToursSection';
import { CityDetail } from './pages/CityDetail';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { ContactPage } from './pages/ContactPage'; // 添加导入
import { AboutPage } from './pages/AboutPage'; // 添加导入
import { AllToursPage } from './pages/AllToursPage'; // 新增导入

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './styles/App.css';

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <HeroSection />
    <GallerySection />
    <SetToursSection />
    <CustomToursSection />
    <Footer />
  </>
);

// src/App.tsx
const App: React.FC = () => {
  return (

    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <ParticleEffect />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destination/:id" element={<DestinationDetailPage />} />
            <Route path="/custom-tours" element={<CustomToursPage />} />
            <Route path="/custom-tours/:id" element={<CustomTourDetail />} />
            {/* <Route path="/custom-tours/:id" element={<CustomToursPage />} /> */}
            <Route path="/tour/:id" element={<TourDetail />} />
            <Route path="/tours" element={<AllToursPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/attraction/:id" element={<AttractionDetail />} />
            <Route path="/city/:id" element={<CityDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;