import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';

// Array matching the filenames in your public folder
const backgroundImages = [
  '/1.jpg',
  '/2.jpeg',
  '/7fb.jpeg'
];

export const HeroSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-scroll logic running every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % backgroundImages.length);
    }, 10000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden -mt-24 pt-24">
      
      {/* Dynamic Background Image Slider */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIdx}
            src={backgroundImages[currentIdx]}
            alt="CCWA Background Display"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Background Overlay - Layered directly on top of images but under text */}
      <div className="absolute inset-0 bg-primary/70 z-10"></div>
      
      {/* Content Layer */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center text-bg flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="uppercase tracking-[0.2em] font-light text-sm md:text-base mb-4 block"
        >
          Faith | Hope | Love
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
        >
          Caring for Widows, Orphans & the Elderly Across Nigeria
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl font-body opacity-90 max-w-2xl mb-10"
        >
          CCWA has been a beacon of hope since 1991, reaching thousands of lives with compassion, support, and the love of God.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link 
            to="/sponsorship" 
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-secondary text-bg font-medium hover:bg-opacity-90 transition-colors shadow-sm text-center"
          >
            Sponsor a Child
          </Link>
          <Link 
            to="/about" 
            className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-bg text-bg font-medium hover:bg-bg hover:text-primary transition-colors text-center"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};