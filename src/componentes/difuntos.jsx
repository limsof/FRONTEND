import React, { useEffect, useState } from "react";
import { getDifuntosRequest } from "../api/tasks.api";

export const ListadoDifuntos = () => {
  const [difuntos, setDifuntos] = useState([]);

  useEffect(() => {
    const fetchDifuntos = async () => {
      try {
        const response = await getDifuntosRequest();
        setDifuntos(response.data);
        console.log(response.data); // Aquí imprime los datos recibidos
      } catch (error) {
        console.error("Error fetching difuntos:", error);
      }
    };

    fetchDifuntos();
  }, []); // El array vacío [] indica que el efecto se ejecuta solo una vez al montar el componente

  return (
    <div className="w-1/2 h-[80vh] mx-auto bg-gradient-to-r from-red-500 to-black shadow-lg rounded-lg p-6 mb-6 overflow-y-auto scrollbar-none">
      <style>
        {`
          .scrollbar-none {
            scrollbar-width: none; /* Oculta la barra de desplazamiento en navegadores que lo soporten */
            -ms-overflow-style: none; /* Oculta la barra de desplazamiento en IE 10 y 11 */
          }

          .scrollbar-none::-webkit-scrollbar {
            display: none; /* Oculta la barra de desplazamiento en WebKit (Chrome, Safari, etc.) */
          }
        `}
      </style>
      <h2 className="text-2xl font-bold text-white mb-4">Listado de Difuntos</h2>
      <div className="overflow-x-auto overflow-hidden">
        <table className="min-w-full bg-white bg-opacity-25 border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Fallecimiento</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Género</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Caso de Muerte</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {difuntos.map((difunto) => (
              <tr key={difunto.id}>
                <td className="px-6 py-4 whitespace-nowrap">{difunto.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{difunto.fecha_fallecimiento}</td>
                <td className="px-6 py-4 whitespace-nowrap">{difunto.edad}</td>
                <td className="px-6 py-4 whitespace-nowrap">{difunto.genero}</td>
                <td className="px-6 py-4 whitespace-nowrap">{difunto.caso_muerte}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
