"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";

const copyrightDate = new Date().getFullYear();

const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

export default function Home() {
  const css = { width: "100%", height: "auto" };
  const [page, setActivePage] = useState("home");
  const [showCovid, setCovid] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const gotoPage = (page) => () => {
    window.scrollTo(0, 0);
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
        <meta
          name="description"
          content="Oodles of Noodles & Dumplings restaurant in OKC. Delicious, authentic Chinese noodles and dumplings featuring in-door and to-go dining options."
        />
        <meta property="og:title" content="Oodles of Noodles & Dumplings" />
        <meta
          property="og:description"
          content="Oodles of Noodles & Dumplings restaurant in OKC. Delicious, authentic Chinese noodles and dumplings featuring in-door and to-go dining options."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="copyright"
          content={`Oodles of Noodles & Dumplings ${new Date().getFullYear()}`}
        ></meta>
        <meta charSet="UTF-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setActivePage={setActivePage} />
      {/* <div
        className={showCovid ? styles.covid : `${styles.covid} ${styles.hide}`}
        onClick={closeCovid}
      >
        COVID-19: The health and safety of our guests and employees is of great
        importance to us. We are working hard to ensure that we meet the latest
        state and federal guidance on hygiene and cleaning.{" "}
        <Link href="/" aria-label="Dismiss COVID-19 safety disclaimer">
          Dismiss
        </Link>
      </div> */}
      <div className={scrollY > 500 ? styles.menuScrollToTop : styles.hide}>
        <Link href="#nav" aria-label="Go to the top of the page">
          Top
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
            <button onClick={gotoPage("menu")}>View Menu</button>
          </div>
        </div>
        <div className={page === "home" ? styles.homeMap : styles.hide}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51902.84618909026!2d-97.6563128198861!3d35.604845380212254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b58e9c53aeb1538!2sBowl%20Thai%20Asian%20Cuisine!5e0!3m2!1sen!2sus!4v1627585735904!5m2!1sen!2sus"
            allowFullScreen=""
            scrolling="no"
            loading="lazy"
          />
        </div>
        <div className={page === "menu" ? `${styles.menu}` : `${styles.hide}`}>
          <Menu gotoPage={gotoPage} />
        </div>
        <div className={page === "faqs" ? `${styles.faqs}` : `${styles.hide}`}>
          <div className={styles.sectionTitle}>
            <h1 className={styles.center}>FAQs</h1>
          </div>
          <div>&nbsp;</div>
          <div className={styles.faqContainer}>
            <div>
              <div className={styles.question}>Do you sell phở?</div>
              <div className={styles.answer}>
                We mainly sell Chinese flour-based noodles. We do have rice
                noodles available for gluten-free customers but there is a $2
                upcharge.
              </div>
              <div>&nbsp;</div>
            </div>
            <div>
              <div className={styles.question}>
                What kind of cuisine is this?
              </div>
              <div className={styles.answer}>
                These are Chinese noodles and dumplings.
              </div>
              <div>&nbsp;</div>
            </div>
            <div>
              <div className={styles.question}>
                Where do you guys get your noodles/dumplings?
              </div>
              <div className={styles.answer}>
                We make all our noodles and dumplings in-house. Each morning and
                afternoon, we try to predict what our demand is and make what we
                need. If we run out, we make them on the fly. Many times,
                customers are eating things we made just a few hours prior.
              </div>
              <div>&nbsp;</div>
            </div>
            <div>
              <div className={styles.question}>
                Why are you guys closed from 2-4:30PM every day?
              </div>
              <div className={styles.answer}>
                During the first weeks we were open, we found that we kept
                running out of stock on certain items and either have to deny
                the order or increase the wait time. In order to keep the great,
                fresh texture and taste, we try to only make as much as we
                expect will sell out. During the the afternoon, we make whatever
                is low in inventory for the following meal.
              </div>
              <div>&nbsp;</div>
            </div>
            <div>
              <div className={styles.question}>
                Why not just make a whole bunch at once?
              </div>
              <div className={styles.answer}>
                We want to keep things as fresh as possible and reduce spoilage.
                This translates directly to a better tasting product as well as
                keeping costs low for the customer.
              </div>
              <div>&nbsp;</div>
            </div>
            <div>
              <div className={styles.question}>
                That is a lot of food. Do you guys sell a smaller size?
              </div>
              <div className={styles.answer}>
                Our menu was designed to keep things simple for our parents with
                limited English capacity. To that end, we only have 1 size
                available for everything.
              </div>
              <div>&nbsp;</div>
            </div>
            <div>
              <div className={styles.question}>
                Why do you guys put broth in the noodle container for to-go
                orders?
              </div>
              <div className={styles.answer}>
                This is to prevent the noodles from clumping together and end up
                turning into a giant ball of dough when you get home.
              </div>
              <div>&nbsp;</div>
            </div>
            <div>
              <div className={styles.question}>
                What can I do to prevent the noodles from getting soggy?
              </div>
              <div className={styles.answer}>
                Unfortunately, the only answer to that is to eat them as soon as
                possible.
              </div>
              <div>&nbsp;</div>
            </div>
            <div>
              <div className={styles.question}>
                I want to take these noodles somewhere far. What can you do to
                help me?
              </div>
              <div className={styles.answer}>
                We can sell the raw noodles along with the broth. You can cook
                the noodles yourself and it will be the same great texture.
              </div>
              <div>&nbsp;</div>
            </div>
          </div>
        </div>
        <div
          className={page === "hours" ? `${styles.hours}` : `${styles.hide}`}
        >
          <div className={styles.sectionTitle}>
            <h1 className={styles.center}>Hours & Location</h1>
          </div>
          <div>&nbsp;</div>
          <div>
            <div>Open everyday except Wednesday and Sunday</div>
            <div>11AM - 2PM</div>
            <div>4:30PM - 9PM</div>
            <div>Kitchen closed at 8:30PM</div>
            <div>&nbsp;</div>
            <div>Closed on Wednesdays and Sundays</div>
            <div>&nbsp;</div>
            <div className={styles.storeFrontContainer}>
              <div style={{ width: "10vw" }}>&nbsp;</div>
              <div className={styles.storefront}>
                <Image
                  src="/images/storefront.jpg"
                  alt="Store front"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  width="1067"
                  height="810"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div style={{ width: "10vw" }}>&nbsp;</div>
            </div>
            <div className={`${styles.location} ${styles.center}`}>
              <Link
                href="https://goo.gl/maps/z9NRN4NWjoLYxh2eA"
                target="_blank"
                passHref
                aria-label="Find us on Google Maps"
              >
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
    </div>
  );
}
