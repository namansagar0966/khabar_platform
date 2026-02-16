import React from 'react';
import { useEditions } from '../contexts/EditionContext';
import PdfViewer from '../components/PdfViewer';
import SanjayShoesPromo from '../components/SanjayShoesPromo';
import { AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { latestEdition, loading, error } = useEditions();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-news-red w-10 h-10" />
      </div>
    );
  }

  if (error || !latestEdition) {
    return (
      <div className="text-center py-20 bg-red-50 text-red-800 rounded-lg border border-red-200">
        <AlertCircle className="mx-auto w-10 h-10 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Unable to load edition</h2>
        <p>{error || "No latest edition found."}</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Date and Title Banner */}
      <div className="text-center space-y-2">
        <div className="inline-block bg-news-black text-white px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-full mb-2">
          Latest Edition
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-news-black">
          {latestEdition.title}
        </h2>
        <p className="text-stone-500 font-sans">{latestEdition.date}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: PDF Viewer */}
        <div className="lg:col-span-2">
          <PdfViewer pdfUrl={latestEdition.pdfUrl} title={latestEdition.title} />
        </div>

        {/* Sidebar: Sanjay Shoes Promo */}
        <div className="space-y-6">
          <SanjayShoesPromo />

          <div className="bg-stone-200 p-6 text-center rounded-sm mt-8 border-t-4 border-stone-400">
            <h4 className="font-bold text-lg mb-2">Missed last week?</h4>
            <p className="text-sm mb-4">Browse our complete archive of past editions.</p>
            <Link 
              to="/archive"
              className="inline-block border-2 border-news-black text-news-black px-6 py-2 font-bold hover:bg-news-black hover:text-white transition-colors"
            >
              Go to Archives
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;