import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Cementerio Ángeles. Todos los derechos reservados.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="/privacy-policy" className="hover:text-gray-400">Política de Privacidad</a>
          </li>
          <li>
            <a href="/terms-of-service" className="hover:text-gray-400">Términos de Servicio</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-400">Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
