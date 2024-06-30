import React, { useEffect, useState } from "react";

import { useTask } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

export const TaskCard = ({ task, clasifi, tum }) => {
  

  

  const { deleteTask } = useTask();

  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-500 to-green-500 rounded-xl shadow-2xl p-8 mb-6">
      <div className="overflow-hidden w-full bg-gray-100 rounded-xl shadow-2xl">
        <table className="min-w-full divide-y divide-gray-300 shadow-lg">
          <thead className="bg-gray-200 shadow-md">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Fecha de Nacimiento
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Fecha de Fallecimiento
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Fecha de Cremación
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Edad
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Género
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Caso de Muerte
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Lugar de Defunción
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Estado Civil
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Tumba
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Clasificación
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300 shadow-md">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {task.nombre}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {task.fecha_nacimiento}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {task.fecha_fallecimiento}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {task.fecha_cremacion}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {task.edad}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {task.genero}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {task.caso_muerte}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {task.lugar_defuncion}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {task.estado_civil}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {tum.map((tumbass) => {
                  if (task.id_tumba === tumbass.id) {
                    
                    return <span key={tumbass.id}>{tumbass.numero}</span>;
                  }
                  return null;
                })}
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {clasifi.map((cc) => {
                  if (task.id_clasificacion === cc.id) {
                    return <span key={cc.id}>{cc.tipo}</span>;
                  }
                  return null;
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-6 space-x-4">
        <button
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-lg transition duration-300 ease-in-out shadow-2xl"
          onClick={() => deleteTask(task.id_difunto)}
        >
          Eliminar
        </button>
        <button
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 px-5 rounded-lg transition duration-300 ease-in-out shadow-2xl"
          onClick={() => navigate(`/administrador/difuntos/edit/${task.id_difunto}`)}
        >
          Editar
        </button>
      </div>
    </div>
  );
};
