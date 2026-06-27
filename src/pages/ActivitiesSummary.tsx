import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { summaryActivities } from '../data/activitiesSummary';

export const ActivitiesSummary: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Summary of Activities | CCWA International"
        description="CCWA Summary of Major Activities — January to December 2023. Discover the impact of our programmes across Nigeria."
      />

      {/* HERO BANNER */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src="/page.jpg" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-primary/50 mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10 text-center text-bg px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-4">Summary of Activities</h1>
            <div className="font-body text-sm md:text-base opacity-90 flex items-center justify-center gap-2">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>&gt;</span>
              <Link to="/activities" className="hover:text-secondary transition-colors">Activities</Link>
              <span>&gt;</span>
              <span>Summary</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TITLE SECTION */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-2">CCWA SUMMARY OF MAJOR ACTIVITIES</h2>
            <p className="font-display text-xl text-secondary font-semibold">JANUARY — DECEMBER 2023</p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ACTIVITIES LIST */}
      <section className="pb-24 bg-bg">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-12">
            {summaryActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col md:flex-row gap-6 bg-white rounded-xl overflow-hidden shadow-sm border border-primary/5"
              >
                {/* Thumbnail */}
                <Link to={`/activities/${activity.id}`} className="block md:w-56 shrink-0 h-48 md:h-auto overflow-hidden group">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                {/* Content */}
                <div className="p-6 pt-0 md:pt-6 flex flex-col justify-center grow">
                  <h3 className="font-display font-bold text-xl text-primary mb-3">
                    {activity.number}. {activity.title}
                  </h3>
                  <p className="font-body text-sm text-text opacity-80 leading-relaxed mb-4">
                    {activity.summary}
                  </p>
                  <Link
                    to={`/activities/${activity.id}`}
                    className="text-secondary font-medium hover:underline text-sm inline-flex items-center gap-1 mt-auto"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
