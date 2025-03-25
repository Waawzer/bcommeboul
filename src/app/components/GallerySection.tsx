"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

// Définition du type pour les éléments de la galerie
type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Liste des images de la galerie
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/gallery/baking_pastry_careers.jpg",
    alt: "Boulanger préparant des pâtisseries",
    width: 1200,
    height: 800,
  },
  {
    id: 2,
    src: "/gallery/Boulangerie-du-Marche_PHOTOS_HD-RVB_Bourg-en-Bresse_2024_0220-scaled.jpg",
    alt: "Boulangerie du Marché",
    width: 2560,
    height: 1707,
  },
  {
    id: 3,
    src: "/gallery/2-Actu - Aux saveurs retrouvées.png",
    alt: "Aux saveurs retrouvées",
    width: 1080,
    height: 720,
  },
  {
    id: 4,
    src: "/gallery/10351.jpg",
    alt: "Pains artisanaux",
    width: 800,
    height: 533,
  },
  {
    id: 5,
    src: "/gallery/7287546.jpg",
    alt: "Présentoir de pains",
    width: 800,
    height: 533,
  },
  {
    id: 6,
    src: "/gallery/277001415-boulangerie-patisserie-michael-1-1600x900.jpg",
    alt: "Boulangerie-pâtisserie artisanale",
    width: 1600,
    height: 900,
  },
  {
    id: 7,
    src: "/gallery/les-meilleures-adresses-de-boulangeries-a-paris-selon-les-chefs.jpg",
    alt: "Boulangerie parisienne",
    width: 1200,
    height: 800,
  },
  {
    id: 8,
    src: "/gallery/recettes-phares-boulangerie.webp",
    alt: "Recettes phares de boulangerie",
    width: 1200,
    height: 675,
  },
  {
    id: 9,
    src: "/gallery/Boulangerie-Marseille©PineappleStudio-AdobeStock.jpeg",
    alt: "Boulangerie à Marseille",
    width: 1200,
    height: 800,
  },
  {
    id: 10,
    src: "/gallery/boulangerie.jpg",
    alt: "Intérieur d'une boulangerie traditionnelle",
    width: 2400,
    height: 1600,
  },
  {
    id: 11,
    src: "/gallery/baguette.jpg",
    alt: "Baguettes traditionnelles",
    width: 2400,
    height: 1600,
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const { theme } = useTheme();

  // Classes adaptées au thème
  const cardClass = theme === 'dark'
    ? 'bg-zinc-900'
    : 'bg-white';

  return (
    <section id="galerie" className="py-24 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-500 text-center mb-16">
          Notre Galerie
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className={`${cardClass} rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-amber-600/20`}
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-64">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal pour l'image en plein écran */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-5xl w-full h-auto mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 text-white hover:text-amber-500 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="p-4 bg-black/70 text-white">
                <p className="text-lg">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}

        {/* Animation décorative */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="w-3 h-3 rounded-full bg-amber-500"
                style={{ 
                  animation: `scaleIn 1.5s ${i * 0.2}s infinite alternate`,
                  opacity: 0.7 - (i * 0.2) 
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 