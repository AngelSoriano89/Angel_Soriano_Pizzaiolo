import React from 'react';
import Contact from '../components/Contact';

const Contacto = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <main className="flex-grow">
        <Contact />
      </main>      
    </div>
  );
};

export default Contacto;
