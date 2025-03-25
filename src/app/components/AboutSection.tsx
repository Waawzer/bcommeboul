"use client";

import React, { useEffect, useRef } from 'react';
import ImageFallback from './ImageFallback';
import { siteConfig } from '@/config/site';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current || !imageRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Parallax effect when section is in view
      if (sectionTop < windowHeight && sectionTop > -windowHeight) {
        const scrollProgress = 1 - (sectionTop / windowHeight);
        
        // Apply transformations based on scroll position
        textRef.current.style.transform = `translateY(${scrollProgress * 20}px)`;
        imageRef.current.style.transform = `translateY(${scrollProgress * -20}px)`;
        
        // Fade in effect
        textRef.current.style.opacity = `${Math.min(1, scrollProgress * 1.5)}`;
        imageRef.current.style.opacity = `${Math.min(1, scrollProgress * 1.5)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="notre-histoire" 
      ref={sectionRef}
      className="py-24 bg-zinc-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-500 text-center mb-16">
          Notre Histoire
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="relative h-[400px] rounded-lg overflow-hidden transition-all duration-700 opacity-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <ImageFallback
              src="/bakery-owner.jpg"
              alt="Fondateur de Pains Bons"
              fill
              className="object-cover"
              fallbackSrc="/placeholder-image.svg"
            />
          </div>
          
          <div 
            ref={textRef}
            className="transition-all duration-700 opacity-0"
          >
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">
              Une passion familiale depuis {siteConfig.foundingYear}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Fondée par la famille {siteConfig.founderName} il y a plus de trois décennies, notre boulangerie a toujours été guidée par une passion profonde pour le pain artisanal et les traditions boulangères françaises.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              De père en fils, nous transmettons nos secrets de fabrication et notre savoir-faire unique qui donne à nos pains leur saveur inimitable. Chaque matin, nos artisans boulangers se lèvent avant l&apos;aube pour pétrir, façonner et cuire des pains d&apos;exception.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                <p className="text-gray-200">Ingrédients 100% naturels</p>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                <p className="text-gray-200">Farines sélectionnées localement</p>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                <p className="text-gray-200">Techniques ancestrales préservées</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 