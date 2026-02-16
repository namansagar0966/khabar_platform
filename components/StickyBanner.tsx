import React, { useState } from 'react';
import { X } from 'lucide-react';

const StickyBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-news-red text-white shadow-lg z-50 animate-slide-up overflow-hidden">
      {/* Full width shimmer overlay */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="text-center sm:text-left">
          <p className="font-bold text-lg mb-1">Sanjay Shoes Exclusive Offer!</p>
          <p className="text-sm sm:text-base">
            Get <span className="font-extrabold text-yellow-300">20% OFF</span> for Khabar Readers.
            Use Code: <span className="font-mono bg-white text-news-red px-2 py-1 rounded ml-2 font-bold select-all">KHABAR20</span>
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 sm:static sm:ml-4 text-white hover:text-gray-200 transition-colors"
          aria-label="Close banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;