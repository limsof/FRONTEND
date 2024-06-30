import axios, { Axios } from "axios";

const enpoint = "http://localhost:4000/api/v1/persons";

class UsuarioServices {
  getAllUsuarios() {
    return axios.get(enpoint);
  }

  createCliente(cliente) {
    console.log(cliente)
    return axios.post(enpoint, cliente);

  }
  // Método para eliminar un usuario por su ID
  updateUsuario(id, usuario) {
    return axios.put(`${enpoint}/${id}`, usuario);
  }

  deleteUsuario(id) {
    return axios.delete(`${enpoint}/${id}`);
  }

  getUsuarioById(id) {
    return axios.get(`${enpoint}/${id}`);
  }








}


export default new UsuarioServices();