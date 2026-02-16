import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

interface PdfViewerProps {
  pdfUrl: string;
  title: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, title }) => {
  return (
    <div className="bg-white p-2 shadow-sm border border-stone-300 rounded-sm">
      <div className="flex justify-between items-center mb-2 px-2">
        <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wide">Digital E-Paper</h3>
        <a 
          href={pdfUrl} 
          download 
          className="flex items-center gap-2 text-sm text-news-red hover:bg-news-red hover:text-white px-3 py-1 rounded transition-colors font-sans font-bold"
        >
          <Download size={16} /> Download PDF
        </a>
      </div>
      
      {/* Container aspect ratio for A4ish paper */}
      <div className="relative w-full h-[600px] md:h-[800px] bg-stone-200 border border-stone-300 overflow-hidden">
        <object
          data={pdfUrl}
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full text-stone-600 p-8 text-center">
            <p className="mb-4">It seems your browser doesn't support embedded PDFs.</p>
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-news-black text-white px-6 py-3 rounded-md hover:bg-stone-800 transition-colors"
            >
              <ExternalLink size={18} /> View PDF in New Tab
            </a>
          </div>
        </object>
      </div>
    </div>
  );
};

export default PdfViewer;