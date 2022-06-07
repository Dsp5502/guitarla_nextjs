import { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/carrito.module.css';

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <Layout pagina={'Carrito de Compras'}>
      <h1 className='heading'>Carrito</h1>
      <main className={` ${styles.contenido} contenedor`}>
        <div className={` ${styles.carrito}`}>
          <h2>Artículos</h2>
          {carrito.length === 0
            ? 'Carrito Vacio'
            : carrito.map((articulo) => (
                <div key={articulo.id} className={styles.producto}>
                  <div>
                    <Image
                      layout='responsive'
                      src={articulo.imagen}
                      alt={`Imagen ${articulo.nombre}`}
                      width={250}
                      height={500}
                    />
                  </div>
                  <div>
                    <p className={styles.nombre}>{articulo.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>
                      <select
                        className={styles.select}
                        value={articulo.cantidad}
                        id='cantidad'
                        onChange={(e) =>
                          actualizarCantidad({
                            cantidad: e.target.value,
                            id: articulo.id,
                          })
                        }
                      >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                      </select>
                    </div>
                    <p className={styles.precio}>
                      $ <span>{articulo.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $
                      <span>{articulo.precio * articulo.cantidad}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => eliminarProducto(articulo.id)}
                    className={styles.eliminar}
                    type='button'
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.resumen}>
          {total > 0 ? (
            <>
              <h3>Resumen del Pedido</h3>
              <p>
                Total a pagar:
                <span>${total}</span>
              </p>
            </>
          ) : (
            <p>Carrito Vacio</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
