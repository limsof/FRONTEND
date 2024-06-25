import React, { useState, useEffect } from 'react';
import UsuarioServices from '../services/UsuarioServices';

export const AdminUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState({ Nombre: '', Apellidos: '', Correo: '', Password: '', Telefono: '', Direccion: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentUsuarioId, setCurrentUsuarioId] = useState(null);

  useEffect(() => {
    loadUsuarios();
  }, []);

  const loadUsuarios = () => {
    UsuarioServices.getAllUsuarios()
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Error loading usuarios:', error);
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      UsuarioServices.updateUsuario(currentUsuarioId, form)
        .then(() => {
          setIsEditing(false);
          setCurrentUsuarioId(null);
          setForm({ Nombre: '', Apellidos: '', Correo: '', Password: '', Telefono: '', Direccion: '' });
          loadUsuarios();
        })
        .catch(error => {
          console.error('Error updating usuario:', error);
        });
    } else {
      UsuarioServices.createCliente(form)
        .then(() => {
          setForm({ Nombre: '', Apellidos: '', Correo: '', Password: '', Telefono: '', Direccion: '' });
          loadUsuarios();
        })
        .catch(error => {
          console.error('Error creating cliente:', error);
        });
    }
  };

  const handleEdit = (usuario) => {
    setIsEditing(true);
    setCurrentUsuarioId(usuario.id);
    setForm({
      Nombre: usuario.Nombre,
      Apellidos: usuario.Apellidos,
      Correo: usuario.Correo,
      Password: usuario.Password,
      Telefono: usuario.Telefono,
      Direccion: usuario.Direccion
    });
  };

  const handleDelete = (usuarioId) => {
    UsuarioServices.deleteUsuario(usuarioId)
      .then(() => {
        loadUsuarios();
      })
      .catch(error => {
        console.error('Error deleting usuario:', error);
      });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Administrador de Usuarios</h1>
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            name="Nombre" 
            value={form.Nombre} 
            onChange={handleChange} 
            placeholder="Nombre" 
            required 
            className="p-2 border rounded" 
          />
          <input 
            type="text" 
            name="Apellidos" 
            value={form.Apellidos} 
            onChange={handleChange} 
            placeholder="Apellidos" 
            required 
            className="p-2 border rounded" 
          />
          <input 
            type="email" 
            name="Correo" 
            value={form.Correo} 
            onChange={handleChange} 
            placeholder="Correo" 
            required 
            className="p-2 border rounded" 
          />
          <input 
            type="password" 
            name="Password" 
            value={form.Password} 
            onChange={handleChange} 
            placeholder="Password" 
            required 
            className="p-2 border rounded" 
          />
          <input 
            type="number" 
            name="Telefono" 
            value={form.Telefono} 
            onChange={handleChange} 
            placeholder="Telefono" 
            required 
            className="p-2 border rounded" 
          />
          <input 
            type="text" 
            name="Direccion" 
            value={form.Direccion} 
            onChange={handleChange} 
            placeholder="Direccion" 
            required 
            className="p-2 border rounded" 
          />
        </div>
        <button 
          type="submit" 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isEditing ? 'Actualizar' : 'Agregar'}
        </button>
      </form>
      <table className="min-w-full bg-white shadow-md rounded mb-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">Nombre</th>
            <th className="py-2 px-4 border-b">Apellidos</th>
            <th className="py-2 px-4 border-b">Correo</th>
            <th className="py-2 px-4 border-b">Telefono</th>
            <th className="py-2 px-4 border-b">Direccion</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td className="py-2 px-4 border-b">{usuario.Nombre}</td>
              <td className="py-2 px-4 border-b">{usuario.Apellidos}</td>
              <td className="py-2 px-4 border-b">{usuario.Correo}</td>
              <td className="py-2 px-4 border-b">{usuario.Telefono}</td>
              <td className="py-2 px-4 border-b">{usuario.Direccion}</td>
              <td className="py-2 px-4 border-b flex space-x-2">
                <button 
                  onClick={() => handleEdit(usuario)} 
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
