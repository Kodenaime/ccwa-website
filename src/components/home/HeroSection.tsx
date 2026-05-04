import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-300 overflow-hidden -mt-24 pt-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-primary/70 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center text-bg flex flex-col items-center">
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
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-secondary text-bg font-medium hover:bg-opacity-90 transition-colors shadow-sm"
          >
            Sponsor a Child
          </Link>
          <Link 
            to="/about" 
            className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-bg text-bg font-medium hover:bg-bg hover:text-primary transition-colors"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
