import React, { useState, useEffect } from 'react';
import RolServices from '../services/RolService';

export const AdminRoles = () => {
  const [roles, setRoles] = useState([]);
  const [form, setForm] = useState({ NombreRol: '', Permisos: '', personId: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentRoleId, setCurrentRoleId] = useState(null);

  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = () => {
    RolServices.getAllRoles()
      .then(response => {
        setRoles(response.data);
      })
      .catch(error => {
        console.error('Error loading roles:', error);
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      RolServices.updateRoles(currentRoleId, form)
        .then(() => {
          setIsEditing(false);
          setCurrentRoleId(null);
          setForm({ NombreRol: '', Permisos: '', personId: '' });
          loadRoles();
        })
        .catch(error => {
          console.error('Error updating role:', error);
        });
    } else {
      RolServices.createRoles(form)
        .then(() => {
          setForm({ NombreRol: '', Permisos: '', personId: '' });
          loadRoles();
        })
        .catch(error => {
          console.error('Error creating role:', error);
        });
    }
  };

  const handleEdit = (role) => {
    setIsEditing(true);
    setCurrentRoleId(role.id);
    setForm(role);
  };

  const handleDelete = (roleId) => {
    RolServices.deleteRoles(roleId)
      .then(() => {
        loadRoles();
      })
      .catch(error => {
        console.error('Error deleting role:', error);
      });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Gestión de Roles</h1>
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow-md">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <input 
            type="text" 
            name="NombreRol" 
            value={form.NombreRol} 
            onChange={handleChange} 
            placeholder="Nombre del Rol" 
            required 
            className="p-2 border rounded"
          />
          <input 
            type="text" 
            name="Permisos" 
            value={form.Permisos} 
            onChange={handleChange} 
            placeholder="Permisos" 
            required 
            className="p-2 border rounded"
          />
          <input 
            type="number" 
            name="personId" 
            value={form.personId} 
            onChange={handleChange} 
            placeholder="ID de Persona" 
            required 
            className="p-2 border rounded"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          {isEditing ? 'Actualizar' : 'Agregar'}
        </button>
      </form>
      <table className="min-w-full bg-white rounded shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Nombre del Rol</th>
            <th className="py-2 px-4 border-b">Permisos</th>
            <th className="py-2 px-4 border-b">ID de Persona</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td className="py-2 px-4 border-b">{role.NombreRol}</td>
              <td className="py-2 px-4 border-b">{role.Permisos}</td>
              <td className="py-2 px-4 border-b">{role.personId}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  onClick={() => handleEdit(role)} 
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600 transition duration-300"
                >
                  Editar
                </button>
                <button 
                  onClick={() => handleDelete(role.id)} 
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
