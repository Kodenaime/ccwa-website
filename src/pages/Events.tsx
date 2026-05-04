import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { SEOHead } from '../components/SEOHead';
import { EventCard } from '../components/home/EventCard';
import eventsData from '../data/events.json';

export const Events: React.FC = () => {
  const sortedEvents = [...eventsData.events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <SEOHead 
        title="Events | CCWA International" 
        description="Stay updated with the latest events, conventions, seminars, and outreaches at CCWA International."
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
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">Events</h1>
            <div className="font-body text-sm md:text-base opacity-90 flex items-center justify-center gap-2">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>&gt;</span>
              <span>Events</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
