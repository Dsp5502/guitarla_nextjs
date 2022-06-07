import Layout from '../components/Layout';
import styles from '../styles/carrito.module.css';

const Carrito = ({ carrito }) => {
  return (
    <Layout pagina={'Carrito de Compras'}>
      <h1 className='heading'>Carrito</h1>
      <main className={` ${styles.contenido} contenedor`}>
        <div>1</div>
        <div>2</div>
      </main>
    </Layout>
  );
};

export default Carrito;
