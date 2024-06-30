import React, { useEffect, useState } from "react";

import { TaskCard } from "../components/TaskCard";
import { useTask } from "../context/TaskProvider";
import { getClasificacionRequest, getTumbaRequest } from "../api/tasks.api";

export const TasksPage = () => {
  // const [tasks, setTasks] = useState([]);   lo  lleve al TaskContext

  const { tasks, loadTasks } = useTask();

  useEffect(() => {
    // para ejecutar esta misma funsion
    loadTasks();
  }, []);


  const [t,setT] =useState([]);
  const [c,setC] =useState([]);
 
 
  useEffect(()=>{
    const tumbas = async()=>{
      const t = await getTumbaRequest();
      setT(t.data);
      
      
    }

    tumbas();
  

  },[]);


  useEffect(()=>{
    const clasificaciones = async()=>{
      const cl = await getClasificacionRequest();
      setC(cl.data);
      
    }
    clasificaciones()

  },[]);

  console.log(c);
  console.log(t);
  

  function renderMain() {
    
    if (tasks.length === 0) return <h1>NO HAY DIFUNTOS EN LA BASE DE DATOS</h1>;
    return tasks.map((task) => (
      // el task id debe estar siempre despues de todo
      <TaskCard task={task} key={task.id} clasifi={c} tum={t} />
    ));
  }

  return (
    <div>
      <h1 className="text-5xl text-black font-bold text-center">DIFUNTOS</h1>{" "}
      <br />
      <div className="">{renderMain()}</div>
    </div>
  );
};
