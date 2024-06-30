import axios from "axios";

export const getDifuntosRequest = async () =>
  await axios.get("http://localhost:4000/api/v1/difuntos");

export const getClasificacionRequest = async () =>
  await axios.get("http://localhost:4000/api/v1/clasificacion");

export const getClasificacionRequestID = async (id) =>
  await axios.get(`http://localhost:4000/api/v1/clasificacion/${id}`)

export const getTumbaRequest = async () =>
  await axios.get("http://localhost:4000/api/v1/tumba");

export const createDifuntosRequest = async (task) =>
  await axios.post("http://localhost:4000/api/v1/difuntos", task);

export const deleteDifuntoRequest = async (id) =>
  await axios.delete(`http://localhost:4000/api/v1/difuntos/${id}`);

export const getDifuntoRequest = async (id) =>
  await axios.get(`http://localhost:4000/api/v1/difuntos/${id}`);

export const updateDifuntoRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/api/v1/difuntos/${id}`, newFields);

/* export const toggleTaskDoneRequest = async (id,done) =>
  await axios.put(`http://localhost:3000/tasks/${id}`,{done} ); */
/* export const toggleTaskDoneRequest = async (id, done) => {
  await axios.put(`http://localhost:3000/tasks/${id}`, {done}); 
}; */

