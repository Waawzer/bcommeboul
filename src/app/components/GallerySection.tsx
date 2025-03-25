"use client";

import React, { useState } from 'react';
import ImageFallback from './ImageFallback';

// Type pour les images de la galerie
type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Images de la galerie
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/bakery-1.jpg',
    alt: 'Intérieur de notre boulangerie',
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: '/gallery/bread-making.jpg',
    alt: 'Fabrication artisanale de pain',
    width: 800,
    height: 800,
  },
  {
    id: 3,
    src: '/gallery/bread-selection.jpg',
    alt: 'Sélection de nos pains',
    width: 800,
    height: 600,
  },
  {
    id: 4,
    src: '/gallery/pastry-chef.jpg',
    alt: 'Notre chef pâtissier au travail',
    width: 800,
    height: 600,
  },
  {
    id: 5,
    src: '/gallery/croissants.jpg',
    alt: 'Croissants frais du matin',
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: '/gallery/bakery-display.jpg',
    alt: 'Vitrine de la boulangerie',
    width: 800,
    height: 800,
  },
  {
    id: 7,
    src: '/gallery/bread-oven.jpg',
    alt: 'Four à pain traditionnel',
    width: 800,
    height: 600,
  },
  {
    id: 8,
    src: '/gallery/flour-baking.jpg',
    alt: 'Préparation de la pâte',
    width: 800,
    height: 600,
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="galerie" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-500 text-center mb-16">
          Galerie
        </h2>
        
        {/* Galerie d'images avec animation au chargement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`overflow-hidden rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-[fadeIn_500ms_ease-in-out_forwards]`}
              style={{
                opacity: 0,
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 w-full">
                <ImageFallback
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  fallbackSrc="/placeholder-image.svg"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal pour afficher l'image en grand */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] animate-[scaleIn_300ms_ease-out_forwards]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-12 right-0 text-white hover:text-amber-500 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative h-[80vh]">
                <ImageFallback
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  fallbackSrc="/placeholder-image.svg"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                {selectedImage.alt}
              </div>
              
              {/* Boutons de navigation */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-amber-600 text-white p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                  setSelectedImage(galleryImages[prevIndex]);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-amber-600 text-white p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = (currentIndex + 1) % galleryImages.length;
                  setSelectedImage(galleryImages[nextIndex]);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection; 