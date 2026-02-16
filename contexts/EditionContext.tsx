import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Edition } from '../types';
import { fetchEditions } from '../services/editionService';

interface EditionContextType {
  editions: Edition[];
  latestEdition: Edition | null;
  loading: boolean;
  error: string | null;
}

const EditionContext = createContext<EditionContextType | undefined>(undefined);

export const EditionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [editions, setEditions] = useState<Edition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEditions = async () => {
      try {
        const data = await fetchEditions();
        setEditions(data);
      } catch (err) {
        setError('Failed to load editions.');
      } finally {
        setLoading(false);
      }
    };
    loadEditions();
  }, []);

  const latestEdition = editions.length > 0 ? editions[0] : null;

  return (
    <EditionContext.Provider value={{ editions, latestEdition, loading, error }}>
      {children}
    </EditionContext.Provider>
  );
};

export const useEditions = () => {
  const context = useContext(EditionContext);
  if (context === undefined) {
    throw new Error('useEditions must be used within an EditionProvider');
  }
  return context;
};