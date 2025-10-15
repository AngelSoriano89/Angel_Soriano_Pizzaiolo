import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading({ 
  fullScreen = true, 
  text = 'Cargando...',
  className = '' 
}) {
  const [show, setShow] = useState(false);

  // Delay the appearance to prevent flashing on fast loads
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div 
      className={`flex flex-col items-center justify-center ${
        fullScreen 
          ? 'fixed inset-0 bg-white/80 dark:bg-gray-900/80 z-50' 
          : 'py-12'
      } ${className}`}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="relative">
        <Loader2 
          className="h-12 w-12 text-orange-500 animate-spin" 
          aria-hidden="true"
        />
        <span className="sr-only">{text}</span>
      </div>
      {text && (
        <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          {text}
        </p>
      )}
    </div>
  );
}

// Componente de carga para botones
export const ButtonLoader = ({ className = '' }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <Loader2 className="h-4 w-4 animate-spin" />
    <span className="sr-only">Cargando...</span>
  </div>
);

// Componente de carga para secciones
export const SectionLoader = () => (
  <div className="flex items-center justify-center py-12">
    <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
  </div>
);

// Componente de carga para tarjetas
export const CardLoader = () => (
  <div className="animate-pulse space-y-4 p-4 border rounded-lg">
    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  </div>
);
