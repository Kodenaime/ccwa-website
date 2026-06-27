import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { SEOHead } from '../components/SEOHead';
import { EventCard } from '../components/home/EventCard';
import eventsData from '../data/events.json';

const MONTH_MAP: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

function parseEventDate(dateStr: string): number {
  if (!dateStr) return 0;
  const lower = dateStr.toLowerCase();
  for (const [month, idx] of Object.entries(MONTH_MAP)) {
    if (lower.includes(month)) {
      const year = parseInt(lower.match(/(\d{4})/)?.[1] ?? '0');
      const day = parseInt(lower.match(/(\d{1,2})(?:st|nd|rd|th)?\s/)?.[1] ?? '1');
      return new Date(year, idx, day).getTime();
    }
  }
  const y = parseInt(lower.match(/(\d{4})/)?.[1] ?? '0');
  return y ? new Date(y, 0, 1).getTime() : 0;
}

const ITEMS_PER_PAGE = 20;

export const Events: React.FC = () => {
  const [page, setPage] = useState(1);

  const sortedEvents = useMemo(
    () => [...eventsData.events].sort((a, b) => parseEventDate(b.date) - parseEventDate(a.date)),
    []
  );

  const totalPages = Math.ceil(sortedEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = sortedEvents.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <>
      <SEOHead 
        title="Events | CCWA International" 
        description="Stay updated with the latest events, conventions, seminars, and outreaches at CCWA International."
      />
      
      {/* PAGE HERO BANNER */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/page.jpg" 
            alt="Page Header Background" 
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
            {paginatedEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-16">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-5 py-2.5 rounded-lg bg-primary text-bg font-medium text-sm disabled:opacity-40 hover:opacity-90 transition-opacity"
              >
                ← Prev
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                      p === page
                        ? 'bg-primary text-bg'
                        : 'bg-white text-text opacity-60 hover:opacity-100 border border-primary/10'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-5 py-2.5 rounded-lg bg-primary text-bg font-medium text-sm disabled:opacity-40 hover:opacity-90 transition-opacity"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
