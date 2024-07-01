import { useEffect, useState } from "react"
import { getAllTipos } from "../services/problema.service"
import '../styles/problemselect.css'

export const TipoSelect = ({value, onChange}) => {

    const [tipos, setTipos] = useState([])

    
    useEffect(() => {
        const fetchTipos = async () => {

            try {
                const tiposResponse = await getAllTipos()
                console.log(tiposResponse)
                setTipos(tiposResponse)
            } catch (error) {
                console.error('Error al obtener los tipos de problemas:', error)
            }
        }

        fetchTipos()
        
    }, [])

    return (
        <div>
            <label className="fieldset-label" htmlFor="tipo">Tipo de Problema</label>
            <select className="fieldset-problem" name="tipo" id="tipo" defaultValue={value} onChange={onChange}>
                {tipos.map((tipo) => (
                    <option key={tipo.id} value={tipo.id}>
                        {tipo.nombre}
                    </option>
                ))}
            </select>

        </div>
    )
}