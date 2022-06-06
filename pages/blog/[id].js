import { useRouter } from 'next/router';

const EntradaBlog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <h1>EntradaBlog</h1>
    </div>
  );
};
export async function getStaticPaths() {
  const url = 'http://localhost:1337/blogs/';
  const respuesta = await fetch(url);
  const blogs = await respuesta.json();
  const paths = blogs.map((blog) => ({ params: { id: blog._id } }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params: { id } }) {
  console.log(id);
  const url = `http://localhost:1337/blogs/${id}`;
  const respuesta = await fetch(url);
  const blog = await respuesta.json();
  return {
    props: {
      blog,
    },
  };
}
// export async function getServerSideProps({ query: { id } }) {
//   console.log(id);
//   const url = `http://localhost:1337/blogs/${id}`;
//   const respuesta = await fetch(url);
//   const blog = await respuesta.json();
//   return {
//     props: {
//       blog,
//     },
//   };
// }

export default EntradaBlog;
