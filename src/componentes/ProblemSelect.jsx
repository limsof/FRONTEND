import '../styles/problemselect.css'

export const ProblemaSelect = ({ value, onChange }) => {
    const severidades = [
        { value: 'bajo', label: 'Bajo' },
        { value: 'medio', label: 'Medio' },
        { value: 'alto', label: 'Alto' },
    ]

    return (
        <div>
            <label className="fieldset-label" htmlFor="severidad">Severidad</label>
            <select className="fieldset-problem" id="severidad" name="severidad" defaultValue={value}  onChange={onChange}>
                {
                    severidades.map((severidad) => (
                        <option key={severidad.value} value={severidad.value}>
                            {severidad.label}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}
