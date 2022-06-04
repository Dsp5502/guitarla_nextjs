import React from 'react';

const Entrada = ({ blog }) => {
  const { titulo, resumen, imagen, published_at, id } = blog;
  return (
    <article>
      <h1>{titulo}</h1>
    </article>
  );
};

export default Entrada;
