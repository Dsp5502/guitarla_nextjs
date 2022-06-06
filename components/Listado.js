import styles from '../styles/Listado.module.css';
import Guitarra from './Guitarra';
const Listado = ({ guitarras }) => {
  return (
    <div>
      {guitarras.map((guitarra) => (
        <Guitarra key={guitarra._id} guitarra={guitarra} />
      ))}
    </div>
  );
};

export default Listado;
