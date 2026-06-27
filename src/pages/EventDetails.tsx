import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { normalizeImagePath } from '../components/home/EventCard';
import eventsData from '../data/events.json';

export const EventDetails: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const event = useMemo(
    () => eventsData.events.find(e => e.id === eventId),
    [eventId]
  );

  const allImages = useMemo(
    () => event?.images?.filter(img => img.src) ?? [],
    [event]
  );

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

  if (!event) {
    return (
      <section className="py-28 bg-bg text-center">
        <div className="container mx-auto px-4 max-w-lg">
          <h1 className="font-display font-bold text-4xl text-primary mb-4">Event Not Found</h1>
          <p className="font-body text-text opacity-70 mb-8">The event you're looking for doesn't exist or has been removed.</p>
          <Link to="/events" className="inline-block bg-primary text-bg px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            ← Back to Events
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEOHead
        title={`${event.title} | CCWA International`}
        description={event.description || `Photos and details from ${event.title}`}
      />

      {/* HERO BANNER */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={normalizeImagePath(event.thumbnail) || '/page.jpg'}
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-primary/50 mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10 text-center text-bg px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-2 max-w-3xl mx-auto leading-tight">
              {event.title}
            </h1>
            <div className="font-body text-sm md:text-base opacity-90 flex items-center justify-center gap-2">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>&gt;</span>
              <Link to="/events" className="hover:text-secondary transition-colors">Events</Link>
              <span>&gt;</span>
              <span className="opacity-70 truncate max-w-[200px]">{event.title}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="py-20 md:py-28 bg-bg">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-6 mb-10 text-text opacity-70"
          >
            {event.date && (
              <span className="flex items-center gap-2 font-body">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.date}
              </span>
            )}
            {event.location && (
              <span className="flex items-center gap-2 font-body">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </span>
            )}
          </motion.div>

          {/* Description */}
          {event.description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-lg text-text opacity-80 max-w-3xl mb-12 leading-relaxed"
            >
              {event.description}
            </motion.p>
          )}

          {/* Photo grid */}
          {allImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-display font-bold text-2xl text-primary mb-6">
                Event Photos ({allImages.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allImages.map((img, i) => (
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    onClick={() => openLightbox(i)}
                    className="aspect-[4/3] overflow-hidden rounded-xl cursor-pointer bg-gray-100 group relative"
                  >
                    <img
                      src={normalizeImagePath(img.src)}
                      alt={img.description || `${event.title} — photo ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {img.description && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white text-xs leading-tight line-clamp-2">{img.description}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
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
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full flex flex-col items-center gap-3"
            >
              <img
                src={normalizeImagePath(allImages[lightboxIndex].src)}
                alt={allImages[lightboxIndex].description || `${event.title} — photo ${lightboxIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white/70 font-body text-sm text-center">
                {allImages[lightboxIndex].description || `${event.title} — ${lightboxIndex + 1} / ${allImages.length}`}
              </p>
            </motion.div>

            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="fixed top-5 right-6 bg-white/15 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors"
            >
              ✕
            </button>

            {allImages.length > 1 && (
              <>
                <button
                  onClick={e => { e.stopPropagation(); prevImage(); }}
                  aria-label="Previous image"
                  className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={e => { e.stopPropagation(); nextImage(); }}
                  aria-label="Next image"
                  className="fixed right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-colors"
                >
                  ›
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
