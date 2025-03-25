"use client";

import React, { useState } from 'react';
import ImageFallback from './ImageFallback';

// Définition du type pour les produits
type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
};

// Liste des produits
const products: Product[] = [
  {
    id: 1,
    name: 'Pain Tradition',
    description: 'Notre pain signature à la croûte dorée et à la mie aérée.',
    image: '/products/pain-tradition.jpg',
    category: 'pains',
  },
  {
    id: 2,
    name: 'Baguette Classique',
    description: 'La baguette française authentique, croustillante à l&apos;extérieur, moelleuse à l&apos;intérieur.',
    image: '/products/baguette.jpg',
    category: 'pains',
  },
  {
    id: 3,
    name: 'Pain aux Céréales',
    description: 'Un mélange de graines et céréales pour un pain riche en saveurs et nutriments.',
    image: '/products/pain-cereales.jpg',
    category: 'pains',
  },
  {
    id: 4,
    name: 'Pain au Levain',
    description: 'Fermenté naturellement avec notre levain maison pour un goût unique.',
    image: '/products/pain-levain.jpg',
    category: 'pains',
  },
  {
    id: 5,
    name: 'Croissant Pur Beurre',
    description: 'Feuilleté délicat au beurre de baratte, croustillant et fondant.',
    image: '/products/croissant.jpg',
    category: 'viennoiseries',
  },
  {
    id: 6,
    name: 'Pain au Chocolat',
    description: 'Viennoiserie feuilletée garnie de chocolat noir intense.',
    image: '/products/pain-chocolat.jpg',
    category: 'viennoiseries',
  },
  {
    id: 7,
    name: 'Chausson aux Pommes',
    description: 'Garni de compote de pommes maison subtilement vanillée.',
    image: '/products/chausson-pommes.jpg',
    category: 'viennoiseries',
  },
  {
    id: 8,
    name: 'Tarte aux Fruits',
    description: 'Pâte sablée, crème pâtissière et fruits frais de saison.',
    image: '/products/tarte-fruits.jpg',
    category: 'patisseries',
  },
  {
    id: 9,
    name: 'Éclair au Chocolat',
    description: 'Pâte à choux, crème pâtissière au chocolat et glaçage intense.',
    image: '/products/eclair.jpg',
    category: 'patisseries',
  },
  {
    id: 10,
    name: 'Fougasse aux Olives',
    description: 'Pain méditerranéen parfumé aux olives et herbes de Provence.',
    image: '/products/fougasse.jpg',
    category: 'specialites',
  },
];

// Catégories disponibles
const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'pains', name: 'Pains' },
  { id: 'viennoiseries', name: 'Viennoiseries' },
  { id: 'patisseries', name: 'Pâtisseries' },
  { id: 'specialites', name: 'Spécialités' },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filtrer les produits par catégorie
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="nos-produits" className="py-24 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-500 text-center mb-16">
          Nos Produits
        </h2>
        
        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white' 
                  : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Grille de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="bg-zinc-900 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-amber-600/10"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-64">
                <ImageFallback
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  fallbackSrc="/placeholder-image.svg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-400 mb-2">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
                <button className="mt-4 text-amber-500 font-medium text-sm hover:text-amber-400 transition-colors">
                  Voir plus →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal pour afficher le détail du produit */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-zinc-900 rounded-lg max-w-2xl w-full overflow-hidden relative">
              <button 
                className="absolute top-4 right-4 text-white hover:text-amber-500 z-10"
                onClick={() => setSelectedProduct(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative h-72">
                <ImageFallback
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                  fallbackSrc="/placeholder-image.svg"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-amber-500 mb-4">{selectedProduct.name}</h3>
                <p className="text-gray-300 mb-6">{selectedProduct.description}</p>
                <div className="text-amber-600 text-sm uppercase tracking-wider font-medium">
                  Catégorie: {categories.find(c => c.id === selectedProduct.category)?.name}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection; 