import React from 'react';
import { Link } from 'react-router';
import eventsData from '../../data/events.json';
import { EventCard } from './EventCard';

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

export const RecentEventsSection: React.FC = () => {
  // Sort by date descending and take top 3
  const sortedEvents = [...eventsData.events]
    .sort((a, b) => parseEventDate(b.date) - parseEventDate(a.date))
    .slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">Recent Events</h2>
            <div className="w-24 h-1 bg-secondary mt-4 rounded-full"></div>
          </div>
          <Link to="/events" className="hidden md:inline-flex text-primary font-medium hover:text-secondary transition-colors">
            See All Events &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sortedEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/events" className="inline-block px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors">
            See All Events
          </Link>
        </div>
      </div>
    </section>
  );
};
