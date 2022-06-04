import { useRouter } from 'next/router';

const EntradaBlog = (blog) => {
  const router = useRouter();
  console.log(blog);
  return (
    <div>
      <h1>EntradaBlog</h1>
    </div>
  );
};
export async function serverSideprops() {
  const { id } = router.query;
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

export default EntradaBlog;
