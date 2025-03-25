"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Empêcher le défilement quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Ajuster les couleurs du header en fonction du thème
  const headerBg = isScrolled
    ? theme === 'dark'
      ? 'bg-black/80 backdrop-blur-md'
      : 'bg-white/80 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  
  const linkClass = theme === 'dark' || !isScrolled
    ? 'text-white hover:text-amber-500'
    : 'text-gray-700 hover:text-amber-600';

  const mobileMenuBg = 'bg-black/95'; // Toujours sombre pour meilleure lisibilité

  const mobileLinkClass = 'text-white hover:text-amber-500'; // Toujours clair pour meilleure visibilité

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      } ${headerBg}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10 flex items-center">
          <div className="relative w-10 h-10 mr-3">
            <Image 
              src="/logo.png" 
              alt={siteConfig.name} 
              width={40} 
              height={40}
              className="object-contain"
            />
          </div>
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
            <button 
              className={theme === 'dark' || !isScrolled ? "text-white p-2" : "text-gray-700 p-2"}
              onClick={toggleMobileMenu}
              aria-label="Menu mobile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/95">
          <div className="container mx-auto px-6">
            <button 
              className="absolute top-5 right-5 text-amber-500 p-2" 
              onClick={toggleMobileMenu}
              aria-label="Fermer le menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center">
              <div className="mb-10 flex justify-center">
                <Image 
                  src="/logo.png" 
                  alt={siteConfig.name} 
                  width={80} 
                  height={80}
                  className="opacity-90"
                />
              </div>

              <ul className="w-full max-w-xs space-y-6">
                {['Notre Histoire', 'Galerie', 'Contact'].map((item) => (
                  <li key={item} className="w-full text-center">
                    <Link 
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-white text-2xl font-medium block py-4 border-b border-amber-500/30 hover:text-amber-500 transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 