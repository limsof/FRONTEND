const API_URL = 'http://localhost:3000/api/v1'

export const createProblema = async (data) => {
    const requestData = {
        severidad: data.severidad,
        estado: 'pendiente',
        id_tipo: data.tipo
    }

    const response = await fetch(`${API_URL}/problema`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })

    if (!response.ok) {
        throw new Error('Error al crear el problema')
    }

    return response.json()
}

export const getAllProblemas = async () => {
    const response = await fetch(`${API_URL}/problema`)

    if (!response.ok) {
        throw new Error('Error al obtener los problemas')
    }

    return response.json()
}

export const getProblemaById = async (id) => {
    const response = await fetch(`${API_URL}/problema/${id}`)

    if (!response.ok) {
        throw new Error('Error al obtener el problema')
    }

    return response.json()
}

export const updateProblema = async ({data, id}) => {
    const requestData = {
        severidad: data.severidad,
        estado: data.estado,
        id_tipo: data.id_tipo
    }

    const response = await fetch(`${API_URL}/problema/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })

    if (!response.ok) {
        throw new Error('Error al actualizar el problema')
    }

    return response.json()
}

export const deleteProblema = async (id) => {
    const response = await fetch(`${API_URL}/problema/${id}`, {
        method: 'DELETE'
    })

    if (!response.ok) {
        throw new Error('Error al eliminar el problema')
    }

    return 'Eliminacion exitosa' 
}

// Métodos CRUD para tipos
export const createTipo = async (data) => {
    const response = await fetch(`${API_URL}/tipo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        throw new Error('Error al crear el tipo')
    }

    return response.json()
}

export const getAllTipos = async () => {
    const response = await fetch(`${API_URL}/tipo`)

    if (!response.ok) {
        throw new Error('Error al obtener los tipos')
    }

    return response.json()
}

export const getTipoById = async (id) => {
    const response = await fetch(`${API_URL}/tipo/${id}`)

    if (!response.ok) {
        throw new Error('Error al obtener el tipo')
    }

    return response.json()
}

export const updateTipo = async (id, data) => {
    const response = await fetch(`${API_URL}/tipo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        throw new Error('Error al actualizar el tipo')
    }

    return response.json()
}

export const deleteTipo = async (id) => {
    const response = await fetch(`${API_URL}/tipo/${id}`, {
        method: 'DELETE'
    })

    if (!response.ok) {
        throw new Error('Error al eliminar el tipo')
    }

    return 'Eliminacion exitosa' // Indica que la eliminación fue exitosa
}
