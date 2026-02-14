// src/pages/AboutPage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  HeartIcon,
  TrophyIcon,
  SparklesIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const values = [
    {
      icon: HeartIcon,
      title: "Authentic Experiences",
      description: "We focus on genuine cultural interactions and meaningful connections."
    },
    {
      icon: ShieldCheckIcon,
      title: "Trust & Reliability",
      description: "Building long-term relationships based on transparency and trust."
    },
    {
      icon: LightBulbIcon,
      title: "Innovation",
      description: "Continuously evolving to offer unique and creative tour experiences."
    },
    {
      icon: UsersIcon,
      title: "Personalization",
      description: "Every tour is tailored to individual preferences and interests."
    }
  ];

  const teamMembers = [
    {
      name: "Emma Chen",
      role: "Founder & CEO",
      bio: "10+ years in tourism industry, former director at Shanghai Tourism Board",
      image: "/images/team/emma.jpg"
    },
    {
      name: "David Wang",
      role: "Operations Director",
      bio: "Expert in logistics and premium service management",
      image: "/images/team/david.jpg"
    },
    {
      name: "Sarah Li",
      role: "Tour Design Specialist",
      bio: "Background in cultural anthropology and event planning",
      image: "/images/team/sarah.jpg"
    },
    {
      name: "Michael Zhang",
      role: "Tech Experience Lead",
      bio: "Former tech executive specializing in innovation tours",
      image: "/images/team/michael.jpg"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with personalized walking tours in Shanghai"
    },
    {
      year: "2019",
      title: "First Corporate Client",
      description: "Partnered with European tech delegation"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched virtual tour experiences"
    },
    {
      year: "2022",
      title: "Premium Services",
      description: "Expanded to luxury and tech innovation tours"
    },
    {
      year: "2023",
      title: "International Recognition",
      description: "Featured in Travel + Leisure magazine"
    }
  ];

  const stats = [
    { label: "Tours Organized", value: "850+", icon: TrophyIcon },
    { label: "Client Countries", value: "35+", icon: MapPinIcon },
    { label: "Team Members", value: "24", icon: UsersIcon },
    { label: "Years Experience", value: "6", icon: CalendarIcon }
  ];

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
                <h1 className="text-xl font-medium text-gray-900">About Us</h1>
                <p className="text-sm text-gray-500">Our story, values, and team</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-medium text-gray-900">Shanghai Journey</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-light mb-6 text-gray-900 tracking-wide">
            Discover<span className="font-medium ml-2 text-blue-700"> Our Story</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            We're passionate about creating unforgettable Shanghai experiences that go beyond 
            typical tourism, offering authentic connections and personalized journeys.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl text-center">
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-medium text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2018 by Emma Chen, Shanghai Journey began as a passion project to 
                showcase the authentic side of Shanghai beyond the typical tourist attractions.
              </p>
              <p>
                What started with personalized walking tours has evolved into a specialized 
                tour operator focusing on unique experiences—from tech innovation visits to 
                luxury cultural immersion.
              </p>
              <p>
                Today, we work with clients from around the world, helping them discover 
                Shanghai through carefully crafted experiences that match their specific 
                interests and preferences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
              {/* You can add your office/team image here */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <SparklesIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Our Shanghai office</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-medium text-blue-700">2018</div>
                <div className="text-sm text-blue-600">Established</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-gray-200 rounded-xl hover:border-blue-200 hover:bg-blue-50/30 transition-all"
              >
                <value.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium text-gray-900">Our Team</h2>
            <div className="flex items-center gap-2 text-blue-600">
              <UsersIcon className="w-5 h-5" />
              <span className="text-sm font-medium">24 team members</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-gray-100">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <UsersIcon className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-medium text-gray-900 mb-8 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className={`p-4 border border-gray-200 rounded-xl ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}>
                      <div className="text-sm font-medium text-blue-600 mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">{milestone.title}</h3>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  
                  {/* Year on timeline */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                    <div className="text-lg font-medium text-gray-900">{milestone.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Why Choose Shanghai Journey</h2>
            <div className="space-y-4">
              {[
                "Deep local knowledge and insider access",
                "100% customized itineraries",
                "Premium service standards",
                "Multilingual expert guides",
                "Focus on authentic experiences",
                "24/7 client support"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl border border-blue-100"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're committed to creating meaningful travel experiences that respect local 
              cultures while providing exceptional service. Every tour is designed with 
              attention to detail and a focus on creating lasting memories.
            </p>
            <div className="flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700">
                <span className="font-medium">98%</span> client satisfaction rate
              </span>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            Ready to Experience Shanghai Differently?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to start planning your personalized Shanghai journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-colors"
            >
              Contact Our Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/custom-tours')}
              className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors"
            >
              Explore Tours
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};