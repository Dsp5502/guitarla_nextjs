import Image from 'next/image';
import Layout from '../../components/Layout';
import { formatearFecha } from '../../helpers';
import styles from '../../styles/Entrada.module.css';

const EntradaBlog = ({ blog }) => {
  console.log(blog);
  const { titulo, imagen, published_at, contenido } = blog;
  return (
    <Layout pagina={titulo}>
      <main className='contenedor'>
        <h1 className='heading'>{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            layout='responsive'
            width={800}
            height={600}
            src={imagen.url}
            alt={`Imagen entrada ${titulo}`}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};
export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs/`;
  const respuesta = await fetch(url);
  const blogs = await respuesta.json();
  const paths = blogs.map((blog) => ({ params: { url: blog.url } }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params: { url } }) {
  const urlEnd = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlEnd);
  const blog = await respuesta.json();
  return {
    props: {
      blog: blog[0],
    },
  };
}
// export async function getServerSideProps({ query: { id } }) {
//   console.log(id);
//   const url = `${process.env.API_URL}/blogs/${id}`;
//   const respuesta = await fetch(url);
//   const blog = await respuesta.json();
//   return {
//     props: {
//       blog,
//     },
//   };
// }

export default EntradaBlog;
