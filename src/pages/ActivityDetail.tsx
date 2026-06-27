import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { summaryActivities } from '../data/activitiesSummary';

export const ActivityDetail: React.FC = () => {
  const { activityId } = useParams<{ activityId: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activity = useMemo(
    () => summaryActivities.find(a => a.id === activityId),
    [activityId]
  );

  const openLightbox  = (i: number) => setLightboxIndex(i);
  const closeLightbox = ()           => setLightboxIndex(null);
  const prevImage     = ()           => setLightboxIndex(prev => prev !== null ? (prev - 1 + activity!.images.length) % activity!.images.length : 0);
  const nextImage     = ()           => setLightboxIndex(prev => prev !== null ? (prev + 1) % activity!.images.length : 0);

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

  if (!activity) {
    return (
      <section className="py-28 bg-bg text-center">
        <div className="container mx-auto px-4 max-w-lg">
          <h1 className="font-display font-bold text-4xl text-primary mb-4">Activity Not Found</h1>
          <p className="font-body text-text opacity-70 mb-8">The activity you're looking for doesn't exist or has been removed.</p>
          <Link to="/activities/summary" className="inline-block bg-primary text-bg px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            ← Back to Summary
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEOHead
        title={`${activity.number}. ${activity.title} | CCWA International`}
        description={activity.summary}
      />

      {/* HERO BANNER */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={activity.image} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-primary/50 mix-blend-multiply"></div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10 text-center text-bg px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-2 max-w-4xl mx-auto leading-tight">
              {activity.number}. {activity.title}
            </h1>
            <div className="font-body text-sm md:text-base opacity-90 flex items-center justify-center gap-2">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>&gt;</span>
              <Link to="/activities" className="hover:text-secondary transition-colors">Activities</Link>
              <span>&gt;</span>
              <Link to="/activities/summary" className="hover:text-secondary transition-colors">Summary</Link>
              <span>&gt;</span>
              <span className="opacity-70 truncate max-w-[200px]">{activity.title}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DETAIL CONTENT */}
      <section className="py-20 md:py-28 bg-bg">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-lg text-text opacity-80 leading-relaxed max-w-4xl mb-12">
              {activity.detail}
            </p>
          </motion.div>

          {/* Photo grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-display font-bold text-2xl text-primary mb-6">
              Photos ({activity.images.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activity.images.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => openLightbox(i)}
                  className="aspect-[4/3] overflow-hidden rounded-xl cursor-pointer bg-gray-100 group"
                >
                  <img
                    src={src}
                    alt={`${activity.title} — photo ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <Link
              to="/activities/summary"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Summary
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
                src={activity.images[lightboxIndex]}
                alt={`${activity.title} — photo ${lightboxIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white/70 font-body text-sm text-center">
                {activity.title} — {lightboxIndex + 1} / {activity.images.length}
              </p>
            </motion.div>

            <button onClick={closeLightbox} aria-label="Close lightbox" className="fixed top-5 right-6 bg-white/15 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors">
              ✕
            </button>

            {activity.images.length > 1 && (
              <>
                <button onClick={e => { e.stopPropagation(); prevImage(); }} aria-label="Previous image" className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-colors">
                  ‹
                </button>
                <button onClick={e => { e.stopPropagation(); nextImage(); }} aria-label="Next image" className="fixed right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-colors">
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
