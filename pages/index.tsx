import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainPage from "../components/MainPage/MainPage";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samarth | Web Dev</title>
        <meta
          name="description"
          content="Samarth Subedi/ React Developer/ Frontend Developer/ programmer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainPage />
    </div>
  );
};

export default Home;
