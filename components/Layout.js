/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name='description' content='Sitio Web de venta de guitarras' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
