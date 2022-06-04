import Entrada from '../components/Entrada';
import Layout from '../components/Layout';

const Blog = ({ blogs }) => {
  return (
    <Layout pagina='Blog'>
      <main className='contenedor'>
        <h2 className='heading'>Blog</h2>
        <div>
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
  const url = 'http://localhost:1337/blogs/';
  const respuesta = await fetch(url);
  const blogs = await respuesta.json();

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
