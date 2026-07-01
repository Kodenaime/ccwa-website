import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Trustee } from './TrusteeCard';

interface BioModalProps {
  trustee: Trustee;
  onClose: () => void;
}

export const BioModal: React.FC<BioModalProps> = ({ trustee, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 overflow-hidden rounded-xl bg-gray-200 shrink-0">
            <img
              src={trustee.photo}
              alt={`${trustee.title} ${trustee.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-primary">{trustee.title} {trustee.name}</h3>
            <p className="font-body text-secondary font-medium text-sm">{trustee.role}</p>
          </div>
        </div>

        {/* Bio text */}
        <p className="font-body text-text leading-relaxed whitespace-pre-line">
          {trustee.bio}
        </p>
      </motion.div>
    </motion.div>
  );
};
