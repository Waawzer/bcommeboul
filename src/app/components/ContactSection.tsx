"use client";

import React from 'react';
import { siteConfig } from '@/config/site';
import { useTheme } from '@/context/ThemeContext';

const ContactSection = () => {
  const { theme } = useTheme();

  // Classes CSS adaptées au thème
  const headingClass = theme === 'dark' 
    ? 'text-amber-400' 
    : 'text-amber-700';
  
  const textClass = theme === 'dark' 
    ? 'text-gray-400' 
    : 'text-gray-600';
  
  const labelClass = theme === 'dark'
    ? 'text-white'
    : 'text-gray-800';
  
  const hoursLabelClass = theme === 'dark'
    ? 'text-gray-300'
    : 'text-gray-700';
  
  const hoursValueClass = theme === 'dark'
    ? 'text-white'
    : 'text-gray-900';

  return (
    <section id="contact" className="py-24 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-500 text-center mb-16">
          Contact
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Carte interactive */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Emplacement de la boulangerie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410647708!2d2.276995235491363!3d48.85883773783297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1648888738970!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          {/* Informations de contact */}
          <div className={`${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'} rounded-lg p-8 shadow-lg flex flex-col justify-between`}>
            <div>
              <h3 className={`text-2xl font-semibold ${headingClass} mb-6`}>Retrouvez-nous</h3>
              
              <div className="space-y-6">
                {/* Adresse */}
                <div className="flex items-start">
                  <div className="bg-amber-600 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${labelClass}`}>Adresse</h4>
                    <p className={textClass}>{siteConfig.address.street}</p>
                    <p className={textClass}>{siteConfig.address.postalCode} {siteConfig.address.city}, {siteConfig.address.country}</p>
                  </div>
                </div>
                
                {/* Téléphone */}
                <div className="flex items-start">
                  <div className="bg-amber-600 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${labelClass}`}>Téléphone</h4>
                    <p className={textClass}>{siteConfig.contact.phone}</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-amber-600 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${labelClass}`}>Email</h4>
                    <p className={textClass}>{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Horaires d'ouverture */}
            <div className="mt-10">
              <h4 className={`text-xl font-semibold ${headingClass} mb-4`}>Horaires d&apos;ouverture</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={hoursLabelClass}>Lundi - Vendredi</span>
                  <span className={hoursValueClass}>{siteConfig.openingHours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className={hoursLabelClass}>Samedi</span>
                  <span className={hoursValueClass}>{siteConfig.openingHours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className={hoursLabelClass}>Dimanche</span>
                  <span className={hoursValueClass}>{siteConfig.openingHours.sunday}</span>
                </div>
                <div className="flex justify-between">
                  <span className={hoursLabelClass}>Jours fériés</span>
                  <span className={hoursValueClass}>{siteConfig.openingHours.holidays}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 