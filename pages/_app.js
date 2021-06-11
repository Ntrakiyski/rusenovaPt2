import { useEffect } from "react";
import { useRouter } from "next/router";

import "../styles/globals.scss";
import Head from "next/head";

import * as gtag from "../lib/gtag";
import { GA_TRACKING_ID } from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
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
