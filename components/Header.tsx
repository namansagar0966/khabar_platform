import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, TAGLINE } from '../constants';
import { Menu, Newspaper } from 'lucide-react';

const Header: React.FC = () => {
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-news-paper border-b-4 border-news-black">
      {/* Top utility bar */}
      <div className="bg-news-black text-white text-xs py-1">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <span>{today}</span>
          <span>India's Leading Weekly</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 text-center relative">
        {/* Mobile menu placeholder (visual only for this static demo) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden">
          <Menu className="text-news-black w-6 h-6" />
        </div>

        {/* Masthead */}
        <Link to="/" className="inline-block group">
          <img
            src="./logo.png"
            alt={APP_NAME}
            className="h-32 md:h-32 w-auto mx-auto mb-2 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="h-1 w-full bg-news-black mt-2 mb-1"></div>
          <div className="h-0.5 w-full bg-news-black mb-2"></div>
          <p className="text-sm md:text-lg font-medium text-stone-600 font-serif italic">
            {TAGLINE}
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="border-t border-b border-stone-300 bg-white sticky top-0 z-40 shadow-sm">
        <ul className="flex justify-center space-x-8 py-3 text-sm md:text-base font-bold uppercase tracking-wider font-sans text-stone-700">
          <li>
            <Link to="/" className="hover:text-news-red transition-colors flex items-center gap-1">
              <Newspaper size={16} /> Latest Edition
            </Link>
          </li>
          <li>
            <Link to="/archive" className="hover:text-news-red transition-colors">
              Archives
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;