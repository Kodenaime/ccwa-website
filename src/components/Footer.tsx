import React from 'react';
import { NavLink, Link } from 'react-router';
import eventsData from '../data/events.json';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Activities', path: '/activities' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Sponsorship', path: '/sponsorship' },
    { name: 'Contact', path: '/contact' },
  ];

  const latestEvents = [...eventsData.events]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <footer className="bg-text text-bg py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div>
                <img src="/logo.png" alt="CCWA Logo" className="w-20 h-20" />
            </div>
            <p className="font-display italic text-secondary">
              "Love one another"
            </p>
            <p className="text-sm opacity-80 leading-relaxed">
              Demonstrating the love of God by caring for widows, widowers, the aged, and orphans across Nigeria.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Latest Events */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-primary">Latest Events</h3>
            <ul className="space-y-3">
              {latestEvents.map((event) => (
                <li key={event.id} className="text-sm group">
                  <Link to="/events" className="block opacity-80 group-hover:opacity-100 group-hover:text-secondary transition-colors line-clamp-1">
                    {event.title}
                  </Link>
                  <span className="block text-xs text-secondary mt-0.5">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-primary">Contact Us</h3>
            <address className="not-italic text-sm opacity-80 space-y-3">
              <p>CCWA House, No. 3 Church Crescent,<br />Nyanya-Karu Road, Abuja</p>
              <p>
                <a href="tel:+234000000000" className="hover:text-secondary">+234 (0) 000 000 0000</a>
              </p>
              <p>
                <a href="mailto:info@ccwaintl.org" className="hover:text-secondary">info@ccwaintl.org</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-bg/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-bg/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-bg/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-bg/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <span className="sr-only">YouTube</span>
            </a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-bg/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs opacity-60 text-center md:text-left">
            <p>&copy; {currentYear} CCWA International. All rights reserved.</p>
            <div className="hidden md:block w-1 h-1 rounded-full bg-bg/40"></div>
            <div className="flex items-center gap-4">
              <NavLink to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</NavLink>
              <NavLink to="/terms" className="hover:text-secondary transition-colors">Terms of Use</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
