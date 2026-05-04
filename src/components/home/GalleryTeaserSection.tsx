import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import galleryData from '../../data/gallery.json';

export const GalleryTeaserSection: React.FC = () => {
  const teaserPhotos = galleryData.photos.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
        <div className="mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">Our Impact in Pictures</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {teaserPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square md:aspect-4/3 overflow-hidden rounded-xl relative group cursor-pointer"
            >
              <img 
                src={`https://placehold.co/800x600/3A9EAD/FAFAF7?text=${encodeURIComponent(photo.category)}`}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-bg font-bold tracking-wide">{photo.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12">
          <Link 
            to="/gallery" 
            className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-bg transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};
