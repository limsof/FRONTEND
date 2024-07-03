import React from 'react';

export const ContactArea = () => {
  return (
    <div className="bg-gradient-to-br from-red-600 to-black text-white p-8 rounded-lg shadow-lg w-4/5 mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <div className="mb-4">
        <p><strong>Dirección:</strong> Av. Los Ángeles 1234, La Paz, Bolivia</p>
        <p><strong>Teléfono:</strong> +591 2 555 1234</p>
        <p><strong>Correo Electrónico:</strong> info@cementeriangeles.com.bo</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">Envíanos un mensaje</h3>
        <form>
          <label htmlFor="nombre" className="block mb-2">Nombre:</label>
          <input type="text" id="nombre" name="nombre" className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2" required />

          <label htmlFor="email" className="block mb-2">Correo Electrónico:</label>
          <input type="email" id="email" name="email" className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2" required />

          <label htmlFor="mensaje" className="block mb-2">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2" rows="4" required></textarea>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
}


