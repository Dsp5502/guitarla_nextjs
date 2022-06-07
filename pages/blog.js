import BlogListado from '../components/BlogListado';
import Layout from '../components/Layout';

const Blog = ({ blog }) => {
  return (
    <Layout pagina='Blog'>
      <main className='contenedor'>
        <BlogListado blog={blog} />
      </main>
    </Layout>
  );
};
export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const respuesta = await fetch(url);
  const blog = await respuesta.json();

  return {
    props: {
      blog,
    },
  };
}

export default Blog;
