import Head from "next/head";
import Image from "next/image";
import AnimatedImage from "../components/AnimatedImage";
import Navbar from "../components/Navbar";
import styles from "../styles/Index.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat</title>
        <meta name="description" content="Websocket chat application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} d-flex flex-column`}>
        <Navbar></Navbar>
        <div className="container mt-5 pt-5 pb-5 flex-grow-1">
          <div className="row g-0 h-100">
            <div className="col-12 col-md-4" style={{ zIndex: "1" }}>
              <p className="display-3">Simple chat application</p>
              <p>Powered by Next.js</p>
              <p>Using the Websocket protocol</p>
              <p>Animations made with React-Spring</p>
            </div>
            <div className="col-12 col-md-8">
              <AnimatedImage></AnimatedImage>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="d-flex justify-content-center p-4">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
