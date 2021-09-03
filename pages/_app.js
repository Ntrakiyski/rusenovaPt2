import "../styles/globals.scss";
import Head from "next/head";

import { useEffect } from "react";

import { init } from "../utils/ga";
import ReactHeap from "reactjs-heap";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_G);
  }, []);

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
        <script type="text/javascript" src="/heat.js"></script>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
