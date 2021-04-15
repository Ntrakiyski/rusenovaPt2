import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gloria Rusenova Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Gloria Rusenova" />
        <meta name="description" content="Gloria Rusenova Portfolio" />
        <meta property="og:description" content="Gloria Rusenova Portfolio" />
        <meta property="og:image" content="/media/thumbnail.jpg" />
        <link rel="apple-touch-icon" href="/media/logo192.png" />
      </Head>

      <h1>Hi it`s me Gloria!</h1>
    </div>
  );
}
