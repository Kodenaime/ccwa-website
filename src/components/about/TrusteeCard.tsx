import React from 'react';
import { motion } from 'framer-motion';

export interface Trustee {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  photo: string;
}

interface TrusteeProps {
  trustee: Trustee;
  index: number;
}

export const TrusteeCard: React.FC<TrusteeProps> = ({ trustee, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 text-center border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-2xl bg-gray-200">
        <img 
          src={`https://placehold.co/400x400/2E7D4F/FAFAF7?text=${encodeURIComponent(trustee.name.split(' ').map(n => n[0]).join(''))}`} 
          alt={`${trustee.title} ${trustee.name}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-display font-bold text-xl text-primary">{trustee.title} {trustee.name}</h3>
      <p className="font-body text-secondary font-medium text-sm mb-4">{trustee.role}</p>
      <p className="font-body text-text opacity-80 text-sm leading-relaxed line-clamp-3">
        {trustee.bio}
      </p>
    </motion.div>
  );
};
