import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface EventType {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  image: string;
  excerpt?: string;
  images: string[];
}

interface EventCardProps {
  event: EventType;
  index: number;
}

const getCategoryColor = (category: string): string => {
  const lower = category.toLowerCase();
  if (lower.includes('convention') || lower.includes('awareness'))  return 'bg-primary';
  if (lower.includes('training')   || lower.includes('seminar'))    return 'bg-teal';
  if (lower.includes('outreach')   || lower.includes('relief'))     return 'bg-secondary';
  if (lower.includes('christmas'))                                   return 'bg-error';
  if (lower.includes('scholarships'))                                return 'bg-primary';
  if (lower.includes('thanksgiving'))                                return 'bg-teal';
  if (lower.includes('projects'))                                    return 'bg-teal';
  if (lower.includes('meeting'))                                     return 'bg-text';
  return 'bg-primary';
};

const formatDate = (date: string): string => {
  if (!date) return 'Date TBC';
  if (/^\d{4}$/.test(date.trim())) return date.trim();
  const parsed = new Date(date);
  if (isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const [isExpanded, setIsExpanded]       = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages: string[] = [event.image, ...(event.images ?? [])].filter(Boolean);
  const hasGallery = event.images?.length > 0;

  const openLightbox  = (i: number) => setLightboxIndex(i);
  const closeLightbox = ()           => setLightboxIndex(null);
  const prevImage     = ()           => setLightboxIndex(prev => prev !== null ? (prev - 1 + allImages.length) % allImages.length : 0);
  const nextImage     = ()           => setLightboxIndex(prev => prev !== null ? (prev + 1) % allImages.length : 0);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   prevImage();
      if (e.key === 'ArrowRight')  nextImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex]);

  return (
    <>
      {/* ── CARD ──────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-bg rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-primary/5 flex flex-col"
      >
        {/* Main image */}
        <div
          className="h-48 w-full bg-gray-200 relative overflow-hidden cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <img
            src={event.image || `https://placehold.co/600x400/2E7D4F/FAFAF7?text=${encodeURIComponent(event.category)}`}
            alt={event.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Category badge */}
          <div className={`absolute top-4 left-4 text-bg text-xs font-bold px-3 py-1 rounded-full ${getCategoryColor(event.category)}`}>
            {event.category}
          </div>

          {/* Image count badge */}
          {hasGallery && (
            <div className="absolute bottom-3 right-3 bg-black/55 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
              🖼 {allImages.length}
            </div>
          )}
        </div>

        {/* Card body */}
        <div className="p-6 flex flex-col grow">

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium opacity-70 mb-3">
            <span className="flex items-center gap-1">📅 {formatDate(event.date)}</span>
            {event.location && (
              <span className="flex items-center gap-1">📍 {event.location}</span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl text-primary mb-3 leading-snug">
            {event.title}
          </h3>

          {/* Excerpt */}
          {event.excerpt && (
            <p className="font-body text-sm text-text opacity-80 mb-4 leading-relaxed">
              {event.excerpt}
            </p>
          )}

          {/* Expandable image gallery */}
          <AnimatePresence>
            {isExpanded && hasGallery && (
              <motion.div
                key="gallery"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-3 gap-1.5 border-t border-primary/10 pt-4 mt-2 mb-4">
                  {event.images.map((src, i) => (
                    <div
                      key={src}
                      onClick={() => openLightbox(i + 1)}
                      className="aspect-square overflow-hidden rounded-md cursor-pointer bg-gray-100 group/thumb"
                    >
                      <img
                        src={src}
                        alt={`${event.title} — photo ${i + 2}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          {hasGallery && (
            <button
              onClick={() => setIsExpanded(prev => !prev)}
              className="text-secondary font-medium hover:underline mt-auto text-left w-max transition-colors text-sm"
            >
              {isExpanded
                ? 'Hide Photos ↑'
                : `View Photos (${event.images.length}) ↓`}
            </button>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/80 z-1000 flex items-center justify-center p-6"
          >
            {/* Image container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full flex flex-col items-center gap-3"
            >
              <img
                src={allImages[lightboxIndex]}
                alt={`${event.title} — photo ${lightboxIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Caption */}
              <p className="text-white/70 font-body text-sm text-center">
                {event.title} — {lightboxIndex + 1} / {allImages.length}
              </p>
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="fixed top-5 right-6 bg-white/15 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors"
            >
              ✕
            </button>

            {/* Prev button */}
            {allImages.length > 1 && (
              <button
                onClick={e => { e.stopPropagation(); prevImage(); }}
                aria-label="Previous image"
                className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-colors"
              >
                ‹
              </button>
            )}

            {/* Next button */}
            {allImages.length > 1 && (
              <button
                onClick={e => { e.stopPropagation(); nextImage(); }}
                aria-label="Next image"
                className="fixed right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-colors"
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};