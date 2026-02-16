import React from 'react';
import { Headline } from '../types';

interface HeadlineCardProps {
  headline: Headline;
}

const HeadlineCard: React.FC<HeadlineCardProps> = ({ headline }) => {
  return (
    <div className="bg-white p-6 border-l-4 border-news-red shadow-sm hover:shadow-md transition-shadow">
      <span className="text-xs font-bold text-news-red uppercase tracking-wider mb-2 block">
        {headline.category}
      </span>
      <h3 className="text-xl font-bold font-serif mb-2 leading-tight">
        {headline.title}
      </h3>
      <p className="text-stone-600 text-sm leading-relaxed font-sans">
        {headline.summary}
      </p>
    </div>
  );
};

export default HeadlineCard;