const API_URL = 'http://localhost:3000/api/v1'

export const createComentario = async (data) => {
    const requestData = {
        descripcion: data.descripcion,
        id_personal: data.id_personal,
        id_problema: data.id_problema
    }

    const response = await fetch(`${API_URL}/comentario`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })

    if (!response.ok) {
        throw new Error('Error al crear el comentario')
    }

    return response.json()
}

export const getAllComentario = async()=>{
    const response = await fetch(`${API_URL}/comentario`)
    
    if(!response.ok) throw new Error('Ocurrio un problema al obtener los comentarios')

    return response.json()
}

export const getComentario = async( {id} )=>{
    const response = await fetch(`${API_URL}/comentario/${id}`)
    
    if(!response.ok) throw new Error('Ocurrio un problema al obtene el comentario')

    return response.json()
}

export const updateComentario = async( {data, id} )=>{
    console.log('he recibido esta madre :, ',data)
    const requestData = {
        descripcion: data.descripcion,
        id_personal: data.id_personal,
        id_problema: data.id_problema
    }

    const response = await fetch(`${API_URL}/comentario/${id}`, {
        method: 'PUT',
        body: JSON.stringify(requestData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    
    if(!response.ok) throw new Error('Ocurrio al actualizar el comentario')

    return response.json()
}

export const deleteComentario = async( {id} )=>{
    const response = await fetch(`${API_URL}/comentario/${id}`, {method: 'DELETE'})
    
    if(!response.ok) throw new Error('Ocurrio un problema al eliminar el comentario')

    return 'Eliminacion exitosa'
}