import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { SEOHead } from '../components/SEOHead';
import { activities } from '../data/activities';

export const Activities: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Our Activities | CCWA International" 
        description="Discover the core recurring programmes of CCWA International, dedicated to the spiritual, emotional, educational, and economic needs of our members."
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
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">Our Activities</h1>
            <div className="font-body text-sm md:text-base opacity-90 flex items-center justify-center gap-2">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>Activities</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO PARAGRAPH */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-xl md:text-2xl text-primary leading-relaxed"
          >
            At CCWA, our work is rooted in seven core Programmes that address the spiritual, emotional, educational, and economic needs of our members and beneficiaries.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-24 h-1 bg-secondary mx-auto mt-8 rounded-full"
          />
        </div>
      </section>

      {/* 3. ACTIVITIES LIST */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col gap-16 md:gap-24">
            {activities.map((activity, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={activity.id} className="relative">
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}>
                    
                    {/* Image Side */}
                    <motion.div 
                      className="w-full md:w-1/2"
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-primary/5 bg-gray-100">
                        <img 
                          src={activity.image} 
                          alt={activity.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div 
                      className="w-full md:w-1/2 flex flex-col justify-center"
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                    >
                      <div className="text-4xl md:text-5xl mb-6 bg-primary/5 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl shadow-sm border border-primary/10">
                        {activity.icon}
                      </div>
                      <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6 leading-tight">
                        {activity.title}
                      </h2>
                      <p className="font-body text-lg text-text opacity-80 leading-relaxed">
                        {activity.description}
                      </p>
                    </motion.div>

                  </div>
                  
                  {/* Subtle Divider (except for the last item) */}
                  {index < activities.length - 1 && (
                    <div className="w-full h-px bg-primary/10 mt-16 md:mt-24"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
