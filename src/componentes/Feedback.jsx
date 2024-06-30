import { useState } from "react"
import { createProblema } from "../services/problema.service"
import { createComentario } from "../services/comentario.service"
import { ProblemaSelect } from './ProblemSelect'
import { TipoSelect } from "./TipoSelect"
import '../styles/feedback.css'

export const Feedback = ({userId}) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        severidad: 'bajo',
        tipo: '1',
        descripcion: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const problemaResponse = await createProblema({
                severidad: data.severidad,
                tipo: data.tipo
            })

            const idProblema = problemaResponse.data.id

            await createComentario({
                descripcion: data.descripcion,
                id_personal: userId,
                id_problema: idProblema
            })

            setData({
                severidad: 'bajo',
                tipo: '1',
                descripcion: ''
            })
        } catch (error) {
            console.error('Error al enviar los datos:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    return (
        <div className="feedback">
            <form className="feedback-form" onSubmit={handleSubmit}>
                <fieldset className="feedback-fieldset">
                    <legend>Registre sus problemas aqui</legend>

                    <div className="feedback-div">
                        <ProblemaSelect value={data.severidad} onChange={handleChange} />

                        <TipoSelect value={data.tipo} onChange={handleChange} />
                    </div>

                    <label className="feedback-label" htmlFor="descripcion">Descripción:</label>
                    <textarea value={data.descripcion} className="feedback-area" id="descripcion" name="descripcion" onChange={handleChange}></textarea>

                    <button className="feedback-button" type="submit">
                        {
                            (loading) ? 'Registrando...' : 'Enviar'
                        }
                    </button>
                </fieldset>
            </form>
        </div>
    )
}