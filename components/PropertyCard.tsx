
import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={property.imageUrl} alt={property.title} />
        <div className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-xs font-bold mr-2 px-2.5 py-1 rounded-full">{property.category}</div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
        <p className="text-gray-600 text-base mb-4 flex-grow">{property.description}</p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <p className="text-2xl font-bold text-gray-900">{formattedPrice}<span className="text-base font-normal text-gray-500">/mes</span></p>
          <a href="#" className="bg-emerald-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 text-sm">
            Agendar Visita
          </a>
        </div>
      </div>
    </div>
  );
};
