import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout pagina='Nosotros'>
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout='responsive'
            width={600}
            height={450}
            src='/img/nosotros.jpg'
            alt='Nosotros'
          />
          <div>
            <p>
              Ut sagittis consequat turpis, eget eleifend dolor interdum non.
              Proin quis nulla vel nisl faucibus vestibulum nec quis nibh. Morbi
              fermentum massa nulla, sit amet fermentum enim convallis luctus.
              Ut et dapibus nibh. Curabitur cursus augue risus, id gravida eros
              aliquet nec. Ut in bibendum est. Pellentesque efficitur
              consectetur quam in aliquet. Sed tempus purus tortor, et venenatis
              tellus posuere a. Etiam lacinia quis arcu eu dapibus. Nunc aliquet
              velit libero, ac condimentum sapien luctus ac. Mauris semper eros
              in justo interdum porttitor.
            </p>
            <p>
              Ut sagittis consequat turpis, eget eleifend dolor interdum non.
              Proin quis nulla vel nisl faucibus vestibulum nec quis nibh. Morbi
              fermentum massa nulla, sit amet fermentum enim convallis luctus.
              Ut et dapibus nibh. Curabitur cursus augue risus, id gravida eros
              aliquet nec. Ut in bibendum est. Pellentesque efficitur
              consectetur quam in aliquet. Sed tempus purus tortor, et venenatis
              tellus posuere a. Etiam lacinia quis arcu eu dapibus. Nunc aliquet
              velit libero, ac condimentum sapien luctus ac. Mauris semper eros
              in justo interdum porttitor.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
