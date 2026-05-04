import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

export const DonationCTASection: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-bg relative overflow-hidden">
      {/* Subtle background gradient pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">Your Generosity Changes Lives</h2>
          <p className="font-body text-lg md:text-xl opacity-90 mb-10">
            Every donation helps us provide food, shelter, education, and medical care to widows, orphans, and the elderly who need it most. Make an impact today.
          </p>
          <Link 
            to="/sponsorship" 
            className="inline-block px-10 py-4 rounded-full bg-secondary text-bg font-bold text-lg hover:bg-white hover:text-secondary transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Donate Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
