import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setActivePage] = useState("home");
  const [showCovid, setCovid] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const gotoPage = (page) => () => {
    window.scrollTo(0,0);
    setActivePage(page);
  };

  const router = useRouter();

  const closeCovid = () => {
    setCovid(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  return (
    <div>
      <Head>
        <title>Oodles of Noodles & Dumplings</title>
        <meta name="description" content="Oodles of Noodles & Dumplings restaurant in OKC. Delicious Chinese noodles and dumplings featuring in-door and to-go dining options." />
        <meta property="og:title" content="Oodles of Noodles & Dumplings" />
        <meta property="og:description" content="Oodles of Noodles & Dumplings restaurant in OKC. Delicious Chinese noodles and dumplings featuring in-door and to-go dining options." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="copyright" content={`Oodles of Noodles & Dumplings ${new Date().getFullYear()}`}></meta>
        <meta charSet="UTF-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setActivePage={setActivePage} />
      <div
        className={showCovid ? styles.covid : `${styles.covid} ${styles.hide}`}
        onClick={closeCovid}
      >
        COVID-19: The health and safety of our guests and employees is of great
        importance to us. We are working hard to ensure that we meet the latest
        state and federal guidance on hygiene and cleaning.{" "}
        <Link href="/">
          <a>Dismiss</a>
        </Link>
      </div>
      <div className={scrollY > 500 ? styles.menuScrollToTop: styles.hide}>
        <Link href="#nav">
          <a>Top</a>
        </Link>
      </div>
      <main className={styles.main}>
        <div
          className={
            page === "home"
              ? `${styles.container} ${styles.home}`
              : `${styles.hide}`
          }
        >
          <div className={styles.welcome}>
            <h1 onClick={gotoPage("menu")}>Grand Opening Oct 30</h1>
          </div>
        </div>
        <div className={
          page === "home"
          ? styles.homeMap
          : styles.hide}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51902.84618909026!2d-97.6563128198861!3d35.604845380212254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b58e9c53aeb1538!2sBowl%20Thai%20Asian%20Cuisine!5e0!3m2!1sen!2sus!4v1627585735904!5m2!1sen!2sus"
            allowFullScreen=""
            scrolling="no"
            loading="lazy" />
        </div>
        <div className={page === "menu" ? `${styles.menu}` : `${styles.hide}`}>
          <Menu gotoPage={gotoPage} />
        </div>
        <div
          className={page === "hours" ? `${styles.hours}` : `${styles.hide}`}
        >
          <div className={styles.sectionTitle}>
            <h1 className={styles.center}>Hours & Location</h1>
          </div>
          <div>&nbsp;</div>
          <div>
            <div>Open Daily 11AM - 9PM</div>
            <div>&nbsp;</div>
            <div className={styles.storeFrontContainer}>
              <div style={{width: "10vw"}}>&nbsp;</div>
              {/* <div className={styles.storefront}>
                <Image src="/images/store-front.jpg" alt="Store front" width="1080" height="810" layout="responsive" />
              </div> */}
              <div style={{width: "10vw"}}>&nbsp;</div>
            </div>
            <div className={`${styles.location} ${styles.center}`}>
              <Link href="https://goo.gl/maps/z9NRN4NWjoLYxh2eA" target="_blank">
                13325 N MacArthur Blvd, Oklahoma City, OK 73142
              </Link>
            </div>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25951.42309454513!2d-97.63880336114327!3d35.604845380212254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b58e9c53aeb1538!2sBowl%20Thai%20Asian%20Cuisine!5e0!3m2!1sen!2sus!4v1627585684132!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div
          className={page === "order" ? `${styles.order}` : `${styles.hide}`}
        >
          <div className={styles.sectionTitle}>
            <h1 className={styles.center}>Order Online</h1>
          </div>
          <div>&nbsp;</div>
          <div>
            <iframe
                src="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main"
                width="100%"
                height="1000px"
                frameBorder="0"
              />
          </div>
        </div>
      </main>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div>Find us on:</div>
          <div className={styles.social}>
            <a href="https://www.facebook.com/OodlesOfNoodlesOKC" target="_blank" rel="noreferrer">
              <Image src="/icons/facebook.svg" alt="Facebook" width="20px" height="20px"></Image>
            </a>
            {/* &nbsp;
            <a href="https://www.yelp.com/biz/bowl-thai-asian-cuisine-oklahoma-city?osq=bowl+thai" target="_blank" rel="noreferrer">
              <Image src="/icons/yelp.svg" alt="Yelp" width="20px" height="20px"></Image>
            </a> */}
            &nbsp;
            <a href="https://www.instagram.com/oodlesofnoodlesokc/" target="_blank" rel="noreferrer">
              <Image src="/icons/instagram.svg" alt="Instagram" width="20px" height="20px"></Image>
            </a>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div>Oodles of Noodles & Dumplings</div>
          <div className={styles.email}>
            <Link href="mailto: oodles.of.noodles.okc@gmail.com">
              <a>oodles.of.noodles.okc@gmail.com</a>
            </Link>
          </div>
          <div>
            13325 N MacArthur Blvd, Oklahoma City, OK 73142
          </div>
          <div className={styles.email}>
            <a href="tel:4056333343">405-633-3343</a>
          </div>
        </div>
      </div>
    </div>
  );
}
