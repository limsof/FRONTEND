import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1/login'; // Asegúrate de que esta URL coincida con tu backend

class AuthService {
  async login(correo, password) {
    try {
      const response = await axios.post(`${API_URL}`, { correo, password });
      if (response.data.token) {
        // Guarda el token y el userId en el almacenamiento local
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data; // Devuelve la respuesta completa
    } catch (error) {
      throw new Error('Error en el inicio de sesión: ' + (error.response?.data?.error || error.message));
    }
  }

  logout() {
    localStorage.removeItem('user'); // Elimina el token del almacenamiento local
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user')); // Obtiene el token y el userId del almacenamiento local
  }
}

export default new AuthService();
