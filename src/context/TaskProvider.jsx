import { createContext, useContext, useState } from "react";
import {
  createDifuntosRequest,
  deleteDifuntoRequest,
  getClasificacionRequest,
  getDifuntoRequest,
  getDifuntosRequest,
  getTumbaRequest,
  updateDifuntoRequest,
} from "../api/tasks.api";

import { TaskContext } from "./TaskContext";

//para crear mi propio hock

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }

  return context;
};

// todo esto es para agrupar
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  //funsion para crear tareas
  async function loadTasks() {
    const response = await getDifuntosRequest();
    //   con el  punto data se saca solo el arreglo
    setTasks(response.data);
    console.log(tasks);
  }

  // funsion para eliminar tareas
  const deleteTask = async (id) => {
    console.log(id);
    try {
      // Realizar la eliminación en la base de datos
      const response = await deleteDifuntoRequest(id);

      // Actualizar el estado localmente
      setTasks(tasks.filter(task => task.id_difunto !== id));

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createDifuntosRequest(task);
      console.log(response);
      // actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getDifuntoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateDifuntoRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        /* text: "hello world si funciona" */
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
