import Entrada from './Entrada';
import styles from '../styles/blog.module.css';

const BlogListado = ({ blog }) => {
  return (
    <>
      <h2 className='heading'>Blog</h2>
      <div className={styles.blog}>
        {blog.map((blog) => (
          <Entrada key={blog._id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default BlogListado;
