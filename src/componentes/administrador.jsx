import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AdminUsuario } from './adminUsuario';
import { AdminRoles } from './adminRoles';

export const Administrador = ({ userId }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-52 bg-gray-800 text-white flex flex-col">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin</h1>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <Link to="usuario" className="block p-2 hover:bg-gray-700 rounded">Usuario</Link>
            </li>
            <li>
              <Link to="roles" className="block p-2 hover:bg-gray-700 rounded">Roles</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <Routes>
        <Route exact path="/" element={<AdminUsuario />} />
          <Route path="usuario" element={<AdminUsuario />} />
          <Route path="roles" element={<AdminRoles />} />
        </Routes>
      </div>
    </div>
  );
};
