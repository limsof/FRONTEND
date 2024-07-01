import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Cementerio Ángeles</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/cliente" className="text-white hover:text-gray-400">Inicio</Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-gray-400">Servicios</Link>
            </li>
            <li>
              <Link to="/cliente/listadodif" className="text-white hover:text-gray-400">Difuntos</Link>
            </li>
            <li>
              <Link to="/cremation" className="text-white hover:text-gray-400">Cremación</Link>
            </li>
            <li>
              <Link to="/cliente/feedback" className="text-white hover:text-gray-400">Feedback</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-400">Contacto</Link>
            </li>
            <li>
              <Link to="/cliente/acerca" className="text-white hover:text-gray-400">Acerca de nosotros</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};
