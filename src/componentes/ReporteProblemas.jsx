import { Feedback } from './Feedback';
import '../styles/cliente.css'


export const ReporteProblemas = ({ userId }) => {

  return (
    <div className='cliente'>
      <h1>Bienvenido al sistema <span>De Clientes</span></h1>
      <Feedback userId={userId} />
    </div>

  );
};
