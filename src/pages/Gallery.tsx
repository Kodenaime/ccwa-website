import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import { SEOHead } from '../components/SEOHead';
import { GalleryGrid } from '../components/GalleryGrid';
import { Lightbox } from '../components/Lightbox';
import galleryData from '../data/gallery.json';

const CATEGORIES = [
  'All',
  'Scholarships',
  'Faith Clinic',
  'Counselling',
  'Thanksgiving',
  'Conventions',
  'Christmas Camp',
  'Others'
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === 'All' 
    ? galleryData.photos 
    : galleryData.photos.filter(p => p.category === selectedCategory);

  const handlePhotoClick = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? filteredPhotos.length - 1 : selectedIndex - 1);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === filteredPhotos.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <>
      <SEOHead 
        title="Gallery | CCWA International" 
        description="Browse through the CCWA International picture gallery showcasing our impact, events, and programs."
      />

      {/* PAGE HERO BANNER */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10 text-center text-bg px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">Gallery</h1>
            <div className="font-body text-sm md:text-base opacity-90 flex items-center justify-center gap-2">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>Gallery</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER BUTTONS & GRID */}
      <section className="py-20 md:py-28 bg-bg min-h-screen">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedIndex(null); // Reset lightbox on filter change
                }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-primary text-bg shadow-md transform scale-105' 
                    : 'bg-white text-text border border-gray-200 hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <GalleryGrid 
            photos={galleryData.photos} 
            selectedCategory={selectedCategory} 
            onPhotoClick={handlePhotoClick} 
          />
        </div>
      </section>

      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox 
            photo={filteredPhotos[selectedIndex]} 
            onClose={closeLightbox}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </>
  );
};
