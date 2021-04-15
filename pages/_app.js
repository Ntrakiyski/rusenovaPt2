import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gloria Rusenova Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Gloria Rusenova" />
        <meta name="description" content="Gloria Rusenova Portfolio" />
        <meta property="og:description" content="Gloria Rusenova Portfolio" />
        <meta property="og:image" content="/media/thumbnail.jpg" />
        <link rel="apple-touch-icon" href="/media/logo192.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
