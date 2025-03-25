"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ajuster les couleurs du header en fonction du thème
  const headerBg = isScrolled
    ? theme === 'dark'
      ? 'bg-black/80 backdrop-blur-md'
      : 'bg-white/80 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  
  const linkClass = theme === 'dark' || !isScrolled
    ? 'text-white hover:text-amber-500'
    : 'text-gray-700 hover:text-amber-600';

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      } ${headerBg}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <span className="text-2xl font-bold text-amber-500">{siteConfig.name}</span>
        </Link>
        
        <div className="flex items-center">
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Notre Histoire', 'Galerie', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className={`${linkClass} transition-colors duration-300 text-sm uppercase tracking-wider font-medium hover-underline-animation`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <div className="block md:hidden ml-4">
            <button className={theme === 'dark' || !isScrolled ? "text-white p-2" : "text-gray-700 p-2"}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 