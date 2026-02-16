import React from 'react';
import { MapPin, Star, Scissors, Instagram, MessageCircle } from 'lucide-react';

const SanjayShoesPromo: React.FC = () => {
  return (
    <div className="bg-white border-2 border-news-black p-0 shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-news-black text-white p-3 text-center">
        <h3 className="font-bold uppercase tracking-widest text-sm">Featured Partner</h3>
      </div>

      {/* Main Image */}
      <div className="relative h-48 overflow-hidden bg-stone-200">
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600" 
          alt="Sanjay Shoes Red Sneaker" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-news-black font-bold text-xs px-2 py-1 rounded shadow">
          4.8 <Star size={10} className="inline fill-current" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-black font-serif text-news-red mb-1">Sanjay Shoes</h2>
          <p className="text-sm font-medium text-stone-500 uppercase tracking-wide">Steps of Comfort, Miles of Style</p>
        </div>

        <p className="text-stone-700 text-center text-sm leading-relaxed">
          Discover the finest collection of formal, casual, and sports footwear for the whole family. 
          Quality you can trust, prices you'll love.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-2">
          <img 
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=300" 
            alt="Shoe collection 1" 
            className="rounded-sm object-cover h-24 w-full border border-stone-200"
          />
          <img 
            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=300" 
            alt="Shoe collection 2" 
            className="rounded-sm object-cover h-24 w-full border border-stone-200"
          />
        </div>

        {/* Coupon Area */}
        <div className="border-2 border-dashed border-news-red bg-red-50 p-4 rounded text-center relative mt-4">
          <Scissors className="absolute -top-3 left-1/2 -translate-x-1/2 text-news-red bg-red-50 px-1" size={20} />
          <p className="text-xs font-bold text-news-red uppercase mb-1">Exclusive Reader Offer</p>
          <p className="text-2xl font-mono font-black text-news-black tracking-wider selection:bg-yellow-200">KHABAR20</p>
          <p className="text-[10px] text-stone-500 mt-1">Show this code at the counter for 20% OFF</p>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-2">
          <a 
            href="https://maps.app.goo.gl/7KuCAeNwiytxgM1H6" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-news-black text-white font-bold py-3 hover:bg-stone-800 transition-colors rounded-sm"
          >
            <MapPin size={18} /> Locate Store
          </a>
          
          <div className="grid grid-cols-2 gap-3">
            <a 
              href="https://www.instagram.com/sanjay_shoe_bags?igsh=eWxsN3FsYXZ4Y25w" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full border-2 border-news-black text-news-black font-bold py-2 hover:bg-news-black hover:text-white transition-colors rounded-sm text-sm"
            >
              <Instagram size={18} /> Instagram
            </a>
            
            <a 
              href="https://wa.me/919131841474" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full border-2 border-green-600 text-green-700 font-bold py-2 hover:bg-green-600 hover:text-white transition-colors rounded-sm text-sm"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          <p className="text-center text-xs text-stone-500">
            Open Daily: 10:00 AM - 9:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default SanjayShoesPromo;