
import React from 'react';
import { BuildingIcon } from './icons';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <BuildingIcon className="h-8 w-8 text-emerald-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">INMOBILIARIA S.A</h1>
          </div>
          <nav>
            <a href="#contact" className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all duration-300">
              Contáctanos
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
