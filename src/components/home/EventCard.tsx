import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

export interface EventImage {
  src: string;
  description: string;
}

export interface EventType {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  thumbnail: string;
  images: EventImage[];
}

interface EventCardProps {
  event: EventType;
  index: number;
}

export const normalizeImagePath = (path: string): string => {
  if (!path) return path;
  return path.startsWith('/') || path.startsWith('http') ? path : `/${path}`;
};

const formatDate = (date: string): string => {
  if (!date) return 'Date TBC';
  return date;
};

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const imageCount = event.images?.length ?? 0;

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
          src={normalizeImagePath(event.thumbnail) || '/page.jpg'}
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {imageCount > 0 && (
          <div className="absolute bottom-3 right-3 bg-black/55 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
            🖼 {imageCount}
          </div>
        )}
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

        {/* Description */}
        {event.description && (
          <p className="font-body text-sm text-text opacity-80 mb-4 leading-relaxed line-clamp-3">
            {event.description}
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
