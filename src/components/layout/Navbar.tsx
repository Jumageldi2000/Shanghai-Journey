// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/outline';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const NAVBAR_HEIGHT = 80; // 与之前一样

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Tours', path: '/tours' },
    { label: 'Custom Tours', path: '/custom-tours' },
    { label: 'About us', path: '/about' },
    { label: 'Contact us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsVisible(true); // 在顶部时显示
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // 向下滚动隐藏
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // 向上滚动显示
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (path: string) => {
    if (path !== '#') {
      navigate(path);
    }
  };

  // 计算 nav 的 top 值
  const navTopValue = isVisible ? 0 : -NAVBAR_HEIGHT;

  return (
    <motion.nav
      animate={{ top: `${navTopValue}px` }}
      transition={{
        // type: "spring", // 移除弹簧类型
        // stiffness: 300,
        // damping: 30,
        ease: "easeInOut", // 使用标准缓动
        duration: 0.3,     // 设置一个明确的持续时间
      }}
      className="fixed left-0 right-0 z-50 overflow-hidden"
      style={{
         top: `${navTopValue}px`,
         height: `${NAVBAR_HEIGHT}px`,
         backgroundColor: 'transparent',
         background: 'transparent',
      }}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
             <motion.div whileHover={{ scale: 1.05 }}>
                 <SparklesIcon className="w-8 h-8 text-white" />
             </motion.div>
             <motion.span 
                 className="text-2xl font-bold text-white whitespace-nowrap"
                 whileHover={{ scale: 1.05 }}
             >
               Shanghai Journey
             </motion.span>
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className="text-white hover:text-purple-300 font-medium relative group whitespace-nowrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          <div></div>
        </div>
      </div>
    </motion.nav>
  );
};