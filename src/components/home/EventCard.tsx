import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-bg rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-primary/5 flex flex-col"
    >
      {/* Preview image */}
      <Link to={`/events/${event.id}`} className="block h-48 w-full bg-gray-200 relative overflow-hidden group">
        <img
          src={event.image || `https://placehold.co/600x400/2E7D4F/FAFAF7?text=${encodeURIComponent(event.category)}`}
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute top-4 left-4 text-bg text-xs font-bold px-3 py-1 rounded-full ${getCategoryColor(event.category)}`}>
          {event.category}
        </div>
      </Link>

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

        {/* View Details button */}
        <Link
          to={`/events/${event.id}`}
          className="text-secondary font-medium hover:underline mt-auto transition-colors text-sm inline-flex items-center gap-1"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
};
