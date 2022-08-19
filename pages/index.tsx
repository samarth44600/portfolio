import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samarth Subedi</title>
        <meta
          name="description"
          content="Samarth Subedi/ React Developer/ Frontend Developer/ programmer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.heading}>Hello, Hi</h1>
        <p>Tata Bye</p>
      </main>
    </div>
  );
};

export default Home;
