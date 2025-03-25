"use client";

import React from 'react';
import { siteConfig } from '@/config/site';
import { useTheme } from '@/context/ThemeContext';

const HeroSection = () => {
  const { theme } = useTheme();
  
  const overlayGradient = theme === 'dark' 
    ? 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))' 
    : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))';

  const scrollToHistory = () => {
    const historySection = document.getElementById('notre-histoire');
    if (historySection) {
      historySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `${overlayGradient}, url("/wheat-field.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-500 mb-4 tracking-tight text-shadow">
          {siteConfig.name}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed text-shadow">
          {siteConfig.slogan}
          <br />
          {siteConfig.description}
        </p>
        <button 
          onClick={scrollToHistory}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-600/20"
        >
          Découvrir
        </button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 