import React from 'react';
import Gallery from '../components/Gallery';

const Galeria = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <main className="flex-grow">
        <Gallery />
      </main>
    </div>
  );
};

export default Galeria;
