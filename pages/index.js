import Head from "next/head";
import AnimatedImage from "../components/AnimatedImage";
import GroupMountAnimation from "../components/GroupMountAnimation";
import Navbar from "../components/Navbar";
import TextMountAnimation from "../components/TextMountAnimation";
import styles from "../styles/Index.module.css";
import Footer from "../components/Footer";

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
              <TextMountAnimation className="display-3">
                Simple chat application
              </TextMountAnimation>
              <GroupMountAnimation>
                <p>Powered by Next.js</p>
                <p>Using the Websocket protocol</p>
                <p>Animations made with React-Spring</p>
              </GroupMountAnimation>
            </div>
            <div className="col-12 col-md-8">
              <AnimatedImage></AnimatedImage>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
