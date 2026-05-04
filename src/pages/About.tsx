import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { SEOHead } from '../components/SEOHead';
import { TrusteeCard, type Trustee } from '../components/about/TrusteeCard';
import boardData from '../data/board.json';

export const About: React.FC = () => {
  const trustees: Trustee[] = boardData.trustees;

  return (
    <>
      <SEOHead 
        title="About Us | CCWA International" 
        description="Learn about CCWA International, our mission, vision, history, and the dedicated Board of Trustees driving our impact across Nigeria."
      />
      
      {/* 1. PAGE HERO BANNER */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center bg-primary overflow-hidden">
        {/* Subtle pattern or overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10 text-center text-bg px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">About CCWA</h1>
            <div className="font-body text-sm md:text-base opacity-90 flex items-center justify-center gap-2">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>About</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MISSION STATEMENT */}
      <section className="py-20 md:py-28 bg-bg relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 block">Our Mission</span>
            <div className="relative">
              <span className="absolute -top-10 -left-6 md:-left-12 text-8xl text-primary/10 font-display font-bold">"</span>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-primary leading-tight md:leading-snug">
                To demonstrate the love of God by providing holistic care and support to widows, widowers, the aged, and orphans across Nigeria and beyond.
              </h2>
              <span className="absolute -bottom-16 -right-6 md:-right-12 text-8xl text-primary/10 font-display font-bold rotate-180">"</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. VISION STATEMENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">Our Vision</h2>
              <div className="w-16 h-1 bg-secondary mb-6 rounded-full"></div>
              <p className="font-body text-lg md:text-xl text-text opacity-90 leading-relaxed">
                A Nigeria where every widow, orphan, and aged person lives with dignity, love, and the knowledge of God's care.
              </p>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative image placeholder */}
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-primary/20"></div>
                <img 
                  src="https://placehold.co/800x600/3A9EAD/FAFAF7?text=Vision" 
                  alt="Our Vision" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. MOTTO */}
      <section className="py-16 md:py-20 bg-secondary text-bg text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display italic font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            "Love one another"
          </h2>
          <p className="font-body font-medium text-lg md:text-xl opacity-90">
            &mdash; John 13:34
          </p>
        </motion.div>
      </section>

      {/* 5. HISTORY */}
      <section className="py-20 md:py-28 bg-bg">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="border-l-4 border-primary pl-6 md:pl-10"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-8">Our Story</h2>
            <div className="space-y-6 font-body text-text opacity-90 leading-relaxed text-lg">
              <p>
                Christian Care for Widows, Widowers, the Aged and Orphans (CCWA) was founded in 1991 out of a deep calling to address the silent suffering of the most vulnerable members of our society. What began as a small fellowship of compassionate individuals has blossomed into a formidable force for good.
              </p>
              <p>
                Over the decades, our organization has grown exponentially. From offering basic food items and emotional support in a single community, CCWA now operates across multiple states in Nigeria. We have established comprehensive programs ranging from vocational training and scholarships to medical outreach and faith clinics.
              </p>
              <p>
                Today, CCWA stands as a testament to what collective compassion can achieve. We continue to expand our reach, ensuring that thousands of widows, orphans, and elderly individuals not only survive, but thrive with dignity, hope, and the unwavering assurance of God's love.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. BOARD OF TRUSTEES */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">Board of Trustees</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 font-body text-text opacity-80 max-w-2xl mx-auto">
              Meet the dedicated leaders who guide CCWA's mission and ensure our continued impact across Nigeria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee, index) => (
              <TrusteeCard key={trustee.id} trustee={trustee} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
