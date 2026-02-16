import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyBanner from './StickyBanner';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-serif text-news-black bg-stone-50">
      <Header />
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      <StickyBanner />
    </div>
  );
};

export default Layout;