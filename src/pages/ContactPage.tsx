// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  UserIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    tourType: '',
    preferredDate: '',
    groupSize: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        tourType: '',
        preferredDate: '',
        groupSize: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      content: "info@shanghaijourney.com",
      description: "General inquiries and information"
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      content: "+86 21 8888 9999",
      description: "Mon-Fri, 9:00-18:00 (GMT+8)"
    },
    {
      icon: MapPinIcon,
      title: "Office Address",
      content: "No. 123, The Bund, Huangpu District",
      description: "Shanghai, China 200002"
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      content: "Monday to Friday",
      description: "9:00 AM - 6:00 PM (GMT+8)"
    }
  ];

  const tourTypes = [
    "Tech & Innovation Tours",
    "Premium Experience Tours",
    "Specialized Activity Tours",
    "Digital & Media Tours",
    "Custom Itinerary",
    "General Inquiry"
  ];

  const groupSizes = [
    "1 person",
    "2-4 people",
    "5-10 people",
    "11-20 people",
    "20+ people"
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
                <h1 className="text-xl font-medium text-gray-900">Contact Us</h1>
                <p className="text-sm text-gray-500">Get in touch with our team</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 tracking-wide">
            Get in<span className="font-medium ml-2 text-blue-700"> Touch</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Have questions about our tours or need assistance planning your Shanghai experience? 
            Our team is here to help you create the perfect itinerary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Contact Information */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
              
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700">{item.content}</p>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Response Time */}
              <div className="p-5 bg-gray-50 rounded-xl">
                <h3 className="font-medium text-gray-900 mb-3">Response Time</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                    <span>General inquiries: Within 24 hours</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                    <span>Tour inquiries: Within 12 hours</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                    <span>Urgent requests: Within 4 hours</span>
                  </li>
                </ul>
              </div>

              {/* WeChat QR Code Section */}
              <div className="p-5 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl border border-blue-100">
                <h3 className="font-medium text-gray-900 mb-3">WeChat Consultation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Add our WeChat for quick responses and Chinese language support.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">QR Code</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">ID: shanghaijourney</p>
                    <p className="text-xs text-gray-500 mt-1">Scan to add on WeChat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircleIcon className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-medium text-gray-900 mb-3">Message Sent Successfully</h2>
                <p className="text-gray-600 max-w-md mb-6">
                  Thank you for contacting us. We've received your message and will respond 
                  within 24 hours. You'll receive a confirmation email shortly.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-colors"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you with personalized recommendations.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <UserIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <PhoneIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Tour Inquiry"
                      />
                    </div>
                  </div>

                  {/* Tour Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="tourType" className="block text-sm font-medium text-gray-700 mb-2">
                        Type of Tour
                      </label>
                      <select
                        id="tourType"
                        name="tourType"
                        value={formData.tourType}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                      >
                        <option value="">Select a tour type</option>
                        {tourTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-2">
                        Group Size
                      </label>
                      <select
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                      >
                        <option value="">Select group size</option>
                        {groupSizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Travel Dates
                    </label>
                    <input
                      type="text"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="e.g., June 2024, Flexible"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Please tell us about your travel plans, specific interests, and any special requirements..."
                    />
                  </div>

                  {/* Privacy Policy */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                    <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
                      I agree to the privacy policy and understand that my data will be used only for responding to this inquiry.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-full font-medium transition-colors ${
                        isLoading
                          ? 'bg-blue-400 cursor-not-allowed'
                          : 'bg-blue-700 hover:bg-blue-800'
                      } text-white`}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      We typically respond within 12 hours during business days.
                    </p>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "What's the best time to contact you?",
                a: "We're available Monday to Friday, 9:00-18:00 GMT+8. For urgent inquiries outside these hours, please call our emergency number."
              },
              {
                q: "Do you provide quotes for custom tours?",
                a: "Yes, we provide detailed quotes within 24-48 hours after understanding your specific requirements."
              },
              {
                q: "Can I modify my tour after booking?",
                a: "Most modifications are possible up to 14 days before the tour start date, subject to availability."
              },
              {
                q: "Do you offer discounts for large groups?",
                a: "Yes, we offer special rates for groups of 10+ people. Contact us for customized group pricing."
              }
            ].map((faq, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                <h3 className="font-medium text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};