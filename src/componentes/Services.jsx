import React from 'react';

export const ServicesArea = () => {
  return (
    <div className="bg-gradient-to-br from-red-600 to-black text-white p-8 rounded-lg shadow-lg w-4/5 mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-gray-300 rounded-md p-4">
          <h3 className="text-xl font-bold mb-2">Servicio de Inhumación</h3>
          <p>Ofrecemos servicios completos para inhumación, con opciones de entierro tradicional y criptas.</p>
        </div>
        <div className="border border-gray-300 rounded-md p-4">
          <h3 className="text-xl font-bold mb-2">Servicio de Cremación</h3>
          <p>Nuestros servicios de cremación están diseñados para satisfacer todas las necesidades y preferencias.</p>
        </div>
        <div className="border border-gray-300 rounded-md p-4">
          <h3 className="text-xl font-bold mb-2">Servicio de Exhumación</h3>
          <p>Realizamos exhumaciones con el máximo respeto y cuidado por los deseos de las familias.</p>
        </div>
        <div className="border border-gray-300 rounded-md p-4">
          <h3 className="text-xl font-bold mb-2">Servicio de Funeraria</h3>
          <p>Nuestra funeraria ofrece servicios completos, desde la preparación del cuerpo hasta los arreglos florales.</p>
        </div>
      </div>
    </div>
  );
}

