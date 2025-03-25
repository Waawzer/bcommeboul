"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <span className="text-2xl font-bold text-amber-500">{siteConfig.name}</span>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Notre Histoire', 'Nos Produits', 'Galerie', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white hover:text-amber-500 transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="block md:hidden">
          <button className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 