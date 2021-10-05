import "../styles/globals.scss";
import Head from "next/head";
import Script from "next/script";

import { useEffect } from "react";

import { init } from "../utils/ga";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init(process.env.NEXT_PUBLIC_G);
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-94L9JT47HK`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-94L9JT47HK', {
              page_path: window.location.pathname,
            });
                `}
      </Script>

      <Head>
        <title>Gloria Rusenova Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Gloria Rusenova" />
        <meta name="description" content="Gloria Rusenova Portfolio" />
        <meta property="og:description" content="Gloria Rusenova Portfolio" />
        <meta property="og:image" content="/media/thumbnail.jpg" />
        <link rel="apple-touch-icon" href="/media/logo192.png" />
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
