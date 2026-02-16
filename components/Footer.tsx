import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-news-black text-stone-400 py-12 mt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div>
          <h3 className="text-white font-bold text-xl mb-4 font-serif">{APP_NAME}</h3>
          <p className="text-sm">
            Delivering the truth, every week. <br/>
            Your trusted source for local and national news in Hindi.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-stone-800 text-center text-xs">
        &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;