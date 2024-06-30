import React, { useContext, useEffect, useState } from "react";
import { Form, Formik } from "formik";

import { useTask } from "../context/TaskProvider";
import { useNavigate, useParams } from "react-router-dom";
import { getClasificacionRequest, getTumbaRequest } from "../api/tasks.api";

export const TasksForm = () => {
  // const {text}=useContext(TaskContext)

  // console.log(text);

  // asi se maneja el context

  // const {text,x} =  useTask()

  // console.log(text,x);

  const { createTask, getTask, updateTask } = useTask();
  const [clasificaciones, setClasificaciones] = useState([]);
  const [tumbas, setTumbas] = useState([]);

  //para clasificaciones

  useEffect(() => {
    const ejecutarClasificacion = async () => {
      const cl = await getClasificacionRequest();

      setClasificaciones(cl.data);
      
    };
    ejecutarClasificacion();
  }, []);
  // para tumbas

  useEffect(() => {
    const tumbasE = async () => {
      const t = await getTumbaRequest();
      
      setTumbas(t.data);
    };
    tumbasE();
  }, []);

  const [task, setTask] = useState({
    nombre: "",
    fecha_nacimiento: "",
    fecha_fallecimiento: "",
    fecha_cremacion: "",
    edad: "",
    genero: "",
    caso_muerte: "",
    lugar_defuncion: "",
    estado_civil: "",
    id_tumba: "",
    id_clasificacion: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  // console.log(params);

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);

        setTask({
          nombre: task.nombre,
          fecha_nacimiento: task.fecha_nacimiento,
          fecha_fallecimiento: task.fecha_fallecimiento,
          fecha_cremacion: task.fecha_cremacion,
          edad: task.edad,
          genero: task.genero,
          caso_muerte: task.caso_muerte,
          lugar_defuncion: task.lugar_defuncion,
          estado_civil: task.estado_civil,
          id_tumba: task.id_tumba,
          id_clasificacion: task.id_clasificacion,
        });
      }
    };

    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (params.id) {
            updateTask(params.id, values);
            console.log("update");
          } else {
            console.log(values);
            createTask(values);
          }
          navigate("/administrador/difuntos");
  
          setTask({
            nombre: "",
            fecha_nacimiento: "",
            fecha_fallecimiento: "",
            fecha_cremacion: "",
            edad: "",
            genero: "",
            caso_muerte: "",
            lugar_defuncion: "",
            estado_civil: "",
            id_tumba: "",
            id_clasificacion: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-gradient-to-r from-white to-black rounded-md p-6 mx-auto mt-10 shadow-2xl max-w-4xl"
          >
            <h1 className="text-xl font-bold uppercase text-center mb-6">
              {params.id ? "Editar Difunto" : "Nuevo Difunto"}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-indigo-500"
                  onChange={handleChange}
                  value={values.nombre}
                />
              </div>
              <div>
                <label htmlFor="fecha_nacimiento" className="block">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  name="fecha_nacimiento"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-indigo-500"
                  onChange={handleChange}
                  value={values.fecha_nacimiento}
                />
              </div>
              <div>
                <label htmlFor="fecha_fallecimiento" className="block">
                  Fecha de fallecimiento
                </label>
                <input
                  type="date"
                  name="fecha_fallecimiento"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-indigo-500"
                  onChange={handleChange}
                  value={values.fecha_fallecimiento}
                />
              </div>
              <div>
                <label htmlFor="fecha_cremacion" className="block">
                  Fecha de cremación
                </label>
                <input
                  type="date"
                  name="fecha_cremacion"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-indigo-500"
                  onChange={handleChange}
                  value={values.fecha_cremacion}
                />
              </div>
              <div>
                <label htmlFor="edad" className="block">
                  Edad
                </label>
                <input
                  type="number"
                  name="edad"
                  placeholder="Edad"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-indigo-500"
                  onChange={handleChange}
                  value={values.edad}
                />
              </div>
              <div>
                <label htmlFor="genero" className="block">
                  Género
                </label>
                <select
                  name="genero"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-indigo-500"
                  onChange={handleChange}
                  value={values.genero}
                >
                  <option value="">Selecciona</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                  <option value="O">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="caso_muerte" className="block">
                  Caso de muerte
                </label>
                <input
                  type="text"
                  name="caso_muerte"
                  placeholder="Caso de muerte"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-indigo-500"
                  onChange={handleChange}
                  value={values.caso_muerte}
                />
              </div>
              <div>
                <label htmlFor="lugar_defuncion" className="block">
                  Lugar de defunción
                </label>
                <input
                  type="text"
                  name="lugar_defuncion"
                  placeholder="Lugar de defunción"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-indigo-500"
                  onChange={handleChange}
                  value={values.lugar_defuncion}
                />
              </div>
              <div>
                <label htmlFor="estado_civil" className="block">
                  Estado civil
                </label>
                <select
                  name="estado_civil"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-indigo-500"
                  onChange={handleChange}
                  value={values.estado_civil}
                >
                  <option value="">Selecciona</option>
                  <option value="Soltero">Soltero/a</option>
                  <option value="Casado">Casado/a</option>
                  <option value="Divorciado">Divorciado/a</option>
                  <option value="Viudo">Viudo/a</option>
                  <option value="Unión libre">Unión libre</option>
                </select>
              </div>
              <div>
                <label htmlFor="id_tumba" className="block">
                  Tumba
                </label>
                <select
                  id="id_tumba"
                  name="id_tumba"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-indigo-500"
                  value={values.id_tumba}
                  onChange={handleChange}
                >
                  {tumbas.map((tum) => (
                    <option key={tum.id} value={tum.id}>
                      {tum.numero}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="id_clasificacion" className="block">
                  Clasificación
                </label>
                <select
                  id="id_clasificacion"
                  name="id_clasificacion"
                  className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:bg-white focus:border-indigo-500"
                  value={values.id_clasificacion}
                  onChange={handleChange}
                >
                  {clasificaciones.map((clasificacion) => (
                    <option key={clasificacion.id} value={clasificacion.id}>
                      {clasificacion.tipo}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md w-full transition duration-300 ease-in-out shadow-lg"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
  
};
