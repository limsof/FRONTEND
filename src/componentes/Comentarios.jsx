import React, { useEffect, useRef, useState } from 'react'
import { deleteComentario, getAllComentario, updateComentario } from '../services/comentario.service'
import '../styles/comentario.css'
import { getAllTipos, updateProblema } from '../services/problema.service'


export const Comentarios = () => {
    const [comentarios, setComentarios] = useState([])
    const [editedComentario, setEditedComentario] = useState({
        id: '',
        descripcion: '',
        id_problema: '',
        severidad: '',
        estado: '',
        id_tipo: '',
        tipo: ''
    }
    )
    const refDialog = useRef(null)
    const [tipos, setTipos] = useState([])
    const [loading, setLoading] = useState(false)

    const findComentarios = async () => {
        try {
            const dataResponse = await getAllComentario()
            setComentarios(dataResponse)
        } catch (error) {
            console.error('Error al obtener los tipos de comentarios:', error)
        }
    }


    useEffect(() => {
        findComentarios()
        console.log('ok')
    }, [])

    useEffect(() => {
        const fetchTipos = async () => {
            try {
                const tiposResponse = await getAllTipos()

                setTipos(tiposResponse)
            } catch (error) {
                console.error('Error al obtener los tipos de problemas:', error)
            }
        }

        fetchTipos()
    }, [])

    const handleEditClick = (comentario) => {
        const { id, descripcion } = comentario
        const id_problema = comentario.Problem.id
        const { estado, severidad } = comentario.Problem
        const id_tipo = comentario.Problem.Type.id
        const tipo = comentario.Problem.Type.nombre
        console.log(comentario)

        const comentarioFormat = {
            id,
            descripcion,
            id_problema,
            severidad,
            estado,
            id_tipo,
            tipo
        }

        setEditedComentario(comentarioFormat)
        console.log(comentario)
        console.log(comentarioFormat)

        if (!refDialog.current) return
        refDialog.current.showModal()
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setEditedComentario((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleCalcelEdit = () => {
        if (!refDialog.current) return
        refDialog.current.close()

    }

    const handleSaveClick = async (e) => {
        console.log(editedComentario)
        e.preventDefault()
        if(!refDialog.current) return

        try {
            setLoading(true)
            const idComentario = editedComentario.id
            const idProblema = editedComentario.id_problema
            const comentarioResponse = await updateComentario({
                data: editedComentario, id: idComentario
            })
            const problemaResponse = await updateProblema({
                data: editedComentario, id: idProblema
            })
            findComentarios()

        } catch (error) {
            console.error('Error al enviar los datos:', error)
        } finally {
            setLoading(false)
            refDialog.current.close()
        }

    }

    const handleRemoveClick = async (id) => {
        try {
            const dataResponse = await deleteComentario({ id })
            findComentarios()
        } catch (error) {
            console.error('Error al obtener los tipos de comentarios:', error)
        }

    }

    return (
        <>
            <h1 className='comentario-title'>Gestión de Comentarios</h1>
            <table className='comentarios-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Descripción</th>
                        <th>Severidad</th>
                        <th>Problema</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {comentarios.map(comentario => (
                        <tr key={comentario.id}>
                            <td>{comentario.id}</td>
                            <td>{comentario.fecha}</td>
                            <td className='td-description'>
                                {comentario.descripcion}
                            </td>
                            <td className='td-select'>
                                {comentario.Problem.severidad}
                            </td>
                            <td className='td-select'>
                                {comentario.Problem.Type.nombre}
                            </td>
                            <td className='td-select'>
                                {comentario.Problem.estado}
                            </td>
                            <td className='td-buttons'>
                                <button onClick={() => handleEditClick(comentario)}>Editar</button>
                                <button onClick={() => handleRemoveClick(comentario.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <dialog ref={refDialog} className='dialog'>
                <div className='dialog-div'>
                    <p className='dialog-p'>Bienvendido al modo de edicion</p>
                    <button className='dialog-button' onClick={handleCalcelEdit} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="dialog-svg" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSaveClick} className='dialog-form'>

                    <label className='dialog-label' htmlFor="descripcion">Descripcion del problema</label>
                    <textarea className="dialog-area" defaultValue={editedComentario.descripcion} id="descripcion" name="descripcion" onChange={onChangeInput}></textarea>

                    <label className='dialog-label' htmlFor="severidad">Severidad</label>
                    <select
                        id='severidad'
                        value={editedComentario.severidad}
                        name='severidad'
                        onChange={onChangeInput}
                        className='dialog-select'
                    >
                        <option value="bajo">Bajo</option>
                        <option value="medio">Medio</option>
                        <option value="alto">Alto</option>
                    </select>
                    <label className="dialog-label" htmlFor="estado">Estado</label>
                    <select
                        value={editedComentario.estado}
                        onChange={onChangeInput}
                        name='estado'
                        id='estado'
                        className='dialog-select'
                    >
                        <option value="pendiente">Pendiente</option>
                        <option value="en proceso">En Proceso</option>
                        <option value="resuelto">Realizado</option>
                    </select>
                    <label className="dialog-label" htmlFor="tipo">Tipo de Problema</label>
                    <select
                        value={editedComentario.id_tipo}
                        onChange={onChangeInput}
                        name="id_tipo"
                        id="tipo"
                        className="dialog-select"
                    >
                        {tipos.map((tipo) => (
                            <option key={tipo.id} value={tipo.id}>
                                {tipo.nombre}
                            </option>
                        ))}
                    </select>
                    <button className='dialog-save' >{
                        (loading) ? 'Actualizando...' : 'Guardar'
                    }</button>
                </form>
            </dialog>
        </>
    )
}

