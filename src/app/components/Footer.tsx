"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  // Classes CSS adaptées au thème
  const footerBg = theme === 'dark' ? 'bg-black' : 'bg-zinc-900';
  const textMuted = theme === 'dark' ? 'text-gray-400' : 'text-gray-300';
  const textHover = theme === 'dark' ? 'hover:text-amber-500' : 'hover:text-amber-400';
  const headingClass = theme === 'dark' ? 'text-white' : 'text-gray-100';
  const borderColor = theme === 'dark' ? 'border-zinc-800' : 'border-zinc-700';
  const copyrightClass = theme === 'dark' ? 'text-gray-500' : 'text-gray-400';
  
  return (
    <footer className={`${footerBg} py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
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
            <p className={`${textMuted} mt-4 max-w-md`}>
              {siteConfig.slogan}
              <br />
              {siteConfig.description}
            </p>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h3 className={`${headingClass} font-semibold mb-4 text-lg`}>Liens rapides</h3>
            <ul className="space-y-2">
              {['Notre Histoire', 'Galerie', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className={`${textMuted} ${textHover} transition-colors duration-300`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mentions légales */}
          <div>
            <h3 className={`${headingClass} font-semibold mb-4 text-lg`}>Mentions légales</h3>
            <ul className="space-y-2">
              {[
                { name: 'CGV', path: '/cgv' },
                { name: 'Politique de confidentialité', path: '/privacy' },
                { name: 'Mentions légales', path: '/legal' },
                { name: 'Plan du site', path: '/sitemap' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className={`${textMuted} ${textHover} transition-colors duration-300`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Réseaux sociaux */}
        <div className="flex justify-center mt-12 mb-8">
          <div className="flex space-x-4">
            {[
              { icon: 'facebook', href: siteConfig.social.facebook },
              { icon: 'instagram', href: siteConfig.social.instagram },
            ].map((social) => (
              <a 
                key={social.icon} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme === 'dark' ? 'bg-zinc-800 hover:bg-amber-600' : 'bg-zinc-700 hover:bg-amber-500'} w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300`}
              >
                <span className="sr-only">{social.icon}</span>
                {social.icon === 'facebook' && (
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                )}
                {social.icon === 'instagram' && (
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
        
        {/* Ligne de séparation */}
        <div className={`border-t ${borderColor} my-8`}></div>
        
        {/* Copyright */}
        <div className={`text-center ${copyrightClass} text-sm`}>
          © {currentYear} {siteConfig.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 