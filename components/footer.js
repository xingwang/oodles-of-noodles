"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div>Find us on:</div>
          <div className={styles.social}>
            <Link
              href="https://www.facebook.com/OodlesOfNoodlesOKC"
              target="_blank"
              rel="noreferrer"
              passHref
              aria-label="Find us on Facebook"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook icon"
                width="20"
                height="20"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              ></Image>
            </Link>
            &nbsp;
            <Link
              href="https://www.yelp.com/biz/oodles-of-noodles-and-dumplings-oklahoma-city"
              target="_blank"
              rel="noreferrer"
              passHref
              aria-label="Find us on Yelp"
            >
              <Image
                src="/icons/yelp.svg"
                alt="Yelp icon"
                width="20"
                height="20"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              ></Image>
            </Link>
            &nbsp;
            <Link
              href="https://www.instagram.com/oodlesofnoodlesokc/"
              target="_blank"
              rel="noreferrer"
              passHref
              aria-label="Find us on Instagram"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram icon"
                width="20"
                height="20"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              ></Image>
            </Link>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div>Oodles of Noodles & Dumplings</div>
          <div className={styles.email}>
            <Link
              href="mailto: oodles.of.noodles.okc@gmail.com"
              aria-label="Our email"
            >
              oodles.of.noodles.okc@gmail.com
            </Link>
          </div>
          <div>13325 N MacArthur Blvd, Oklahoma City, OK 73142</div>
          <div className={styles.email}>
            <Link href="tel:4056333343" aria-label="Our phone number">
              405-633-3343
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
