"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Events from "./components/events";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.contentWrapper}>
          <Image
            src="/translate.png"
            alt="Translate"
            width={91}
            height={66}
            priority
            className={styles.translateImage}
          />
          <h1 className={styles.headerText}>Translate it</h1>
        </div>
      </div>
      <div className={styles.whiteOverlay}>
        <Events/>
      </div>
      <Footer/>
    </div>
  );
}
