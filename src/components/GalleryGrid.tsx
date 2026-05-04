import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  photos: Photo[];
  selectedCategory: string;
  onPhotoClick: (index: number) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ photos, selectedCategory, onPhotoClick }) => {
  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(p => p.category === selectedCategory);

  return (
    <motion.div 
      layout
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
    >
      <AnimatePresence mode="popLayout">
        {filteredPhotos.map((photo, filteredIndex) => {
          return (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="aspect-square relative rounded-xl overflow-hidden cursor-pointer group bg-gray-200"
              onClick={() => onPhotoClick(filteredIndex)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};
