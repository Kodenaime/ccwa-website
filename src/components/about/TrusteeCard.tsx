import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BioModal } from './BioModal';

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
  const [modalOpen, setModalOpen] = useState(false);

  const hasBio = trustee.bio.trim().length > 0;

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-2xl p-6 text-center border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
      >
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-2xl bg-gray-200">
          <img 
            src={trustee.photo}   
            alt={`${trustee.title} ${trustee.name}`} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-display font-bold text-xl text-primary">{trustee.title} {trustee.name}</h3>
        <p className="font-body text-secondary font-medium text-sm mb-4">{trustee.role}</p>
        <p className="font-body text-text opacity-80 text-sm leading-relaxed line-clamp-3 mb-4">
          {trustee.bio}
        </p>
        {hasBio && (
          <button
            onClick={() => setModalOpen(true)}
            className="mt-auto inline-flex items-center gap-1 text-secondary hover:text-primary font-medium text-sm transition-colors self-center"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </motion.div>

      {modalOpen && (
        <BioModal trustee={trustee} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};
