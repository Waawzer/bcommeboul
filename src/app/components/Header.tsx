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

  // Vérifier la position initiale et configurer l'écouteur de défilement
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Vérification initiale
    checkScroll();
    
    // Ajouter l'écouteur d'événement
    window.addEventListener('scroll', checkScroll);
    
    // Nettoyer l'écouteur
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Bloquer le défilement quand le menu est ouvert
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

  // Toggle du menu mobile
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Styles conditionnels pour le header
  const headerBg = isScrolled
    ? theme === 'dark'
      ? 'bg-black/80 backdrop-blur-md'
      : 'bg-white/80 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  
  const headerLinkClass = theme === 'dark' || !isScrolled
    ? 'text-white hover:text-amber-500'
    : 'text-gray-700 hover:text-amber-600';

  const menuButtonClass = theme === 'dark' || !isScrolled
    ? 'text-white'
    : 'text-gray-700';

  return (
    <>
      {/* Header principal */}
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
            {/* Navigation desktop */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {['Notre Histoire', 'Galerie', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className={`${headerLinkClass} transition-colors duration-300 text-sm uppercase tracking-wider font-medium hover-underline-animation`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sélecteur de thème */}
            <ThemeToggle />

            {/* Bouton menu mobile */}
            <button 
              className={`${menuButtonClass} p-2 ml-4 block md:hidden`}
              onClick={toggleMobileMenu}
              aria-label="Menu mobile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile - complètement séparé du header */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-[9999] md:hidden">
          <div className="w-full h-full flex flex-col">
            {/* Entête du menu mobile */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-amber-500/20">
              <div className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt={siteConfig.name} 
                  width={40} 
                  height={40}
                  className="object-contain mr-3"
                />
                <span className="text-xl font-bold text-amber-500">{siteConfig.name}</span>
              </div>
              
              <button 
                onClick={toggleMobileMenu}
                className="text-amber-500 p-1"
                aria-label="Fermer le menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Contenu principal du menu */}
            <div className="flex-1 flex flex-col justify-center items-center px-5">
              <nav className="w-full max-w-xs">
                <ul className="space-y-6">
                  {['Notre Histoire', 'Galerie', 'Contact'].map((item) => (
                    <li key={item} className="border-b border-amber-500/20 pb-2">
                      <Link 
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="text-white text-2xl font-medium block py-3 text-center hover:text-amber-500 transition-colors"
                        onClick={toggleMobileMenu}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            {/* Pied de page du menu mobile */}
            <div className="px-5 py-5 border-t border-amber-500/20 flex justify-center">
              <div className="flex items-center space-x-3">
                <span className="text-white">Changer de thème:</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 