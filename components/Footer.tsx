
import React from 'react';
import { BuildingIcon } from './icons';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <BuildingIcon className="h-8 w-8 text-emerald-400 mr-3" />
              <h2 className="text-xl font-bold">INMOBILIARIA S.A</h2>
            </div>
            <p className="text-gray-400 max-w-xs">Tu socio de confianza en bienes raíces, comprometidos con encontrar el lugar de tus sueños.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4 uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contacto@inmobiliariasa.com</li>
              <li>Teléfono: +57 300 123 4567</li>
              <li>Dirección: Calle Falsa 123, Bogotá</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4 uppercase tracking-wider">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} INMOBILIARIA S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
