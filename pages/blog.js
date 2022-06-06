import Entrada from '../components/Entrada';
import Layout from '../components/Layout';
import styles from '../styles/blog.module.css';

const Blog = ({ blogs }) => {
  return (
    <Layout pagina='Blog'>
      <main className='contenedor'>
        <h2 className='heading'>Blog</h2>
        <div className={styles.blog}>
          {blogs.map((blog) => (
            <Entrada key={blog._id} blog={blog} />
          ))}
        </div>
        {}
      </main>
    </Layout>
  );
};
export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs/`;
  const respuesta = await fetch(url);
  const blogs = await respuesta.json();

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
