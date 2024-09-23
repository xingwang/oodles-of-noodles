"use client";

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={`${styles.container} ${styles.home}`}>
          <div className={styles.welcome}>
            <button>
              <Link href="/menu" aria-label="View Menu">
                View Menu
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.homeMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51902.84618909026!2d-97.6563128198861!3d35.604845380212254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b58e9c53aeb1538!2sBowl%20Thai%20Asian%20Cuisine!5e0!3m2!1sen!2sus!4v1627585735904!5m2!1sen!2sus"
            allowFullScreen=""
            scrolling="no"
            loading="lazy"
          />
        </div>
      </main>
    </div>
  );
}
