import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import activitiesData from '../../data/activities.json';

interface ActivityCardProps {
  title: string;
  description: string;
  link: string;
  index: number;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, description, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-bg border border-primary/10 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-4">
        ✨
      </div>
      <h3 className="font-display font-bold text-xl text-primary mb-3">{title}</h3>
      <p className="font-body text-text opacity-80 mb-6 grow">{description}</p>
      <Link to={link} className="text-secondary font-medium hover:underline mt-auto inline-block">
        Learn more &rarr;
      </Link>
    </motion.div>
  );
};

export const WhatWeDoSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">What We Do</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activitiesData.activities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              description={activity.body}
              link="/activities"
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
