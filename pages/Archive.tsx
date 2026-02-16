import React, { useState } from 'react';
import { useEditions } from '../contexts/EditionContext';
import { FileText, Download, Calendar } from 'lucide-react';
import PdfViewer from '../components/PdfViewer';

const Archive: React.FC = () => {
  const { editions, loading } = useEditions();
  const [selectedEditionId, setSelectedEditionId] = useState<string | null>(null);

  const handleEditionClick = (id: string) => {
    setSelectedEditionId(id);
    // Smooth scroll to viewer
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedEdition = editions.find(e => e.id === selectedEditionId);

  if (loading) return <div className="py-20 text-center">Loading archives...</div>;

  return (
    <div className="space-y-8">
      <div className="border-b-2 border-stone-300 pb-4">
        <h2 className="text-3xl font-bold font-serif text-news-black">Edition Archive</h2>
        <p className="text-stone-500 mt-2">Explore our collection of past weekly newspapers.</p>
      </div>

      {selectedEdition && (
        <div className="bg-stone-100 p-6 rounded-lg border border-stone-200 animate-fade-in mb-12">
           <div className="flex justify-between items-center mb-4">
             <h3 className="text-xl font-bold">Viewing: {selectedEdition.title}</h3>
             <button 
               onClick={() => setSelectedEditionId(null)}
               className="text-sm text-stone-500 hover:text-news-red underline"
             >
               Close Viewer
             </button>
           </div>
           <PdfViewer pdfUrl={selectedEdition.pdfUrl} title={selectedEdition.title} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {editions.map((edition) => (
          <div 
            key={edition.id}
            onClick={() => handleEditionClick(edition.id)}
            className={`
              cursor-pointer group bg-white border border-stone-200 p-4 rounded-lg hover:shadow-lg transition-all
              ${selectedEditionId === edition.id ? 'ring-2 ring-news-red' : ''}
            `}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="bg-stone-100 p-3 rounded-full group-hover:bg-red-50 group-hover:text-news-red transition-colors">
                <FileText size={24} />
              </div>
              {edition.isLatest && (
                <span className="bg-news-red text-white text-[10px] font-bold px-2 py-1 uppercase rounded-full">
                  Latest
                </span>
              )}
            </div>
            
            <h3 className="font-bold text-lg mb-1 group-hover:text-news-red transition-colors">
              Edition #{edition.editionNumber}
            </h3>
            <p className="text-sm text-stone-500 flex items-center gap-2 mb-4">
              <Calendar size={14} /> {edition.date}
            </p>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
              <span className="text-sm font-bold text-stone-600">Read Online</span>
              <a 
                href={edition.pdfUrl}
                download
                onClick={(e) => e.stopPropagation()} 
                className="text-stone-400 hover:text-news-black"
                title="Download PDF"
              >
                <Download size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;