import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const Location = () => {
  return (
    <>
      <div className={`${styles.hours}`}>
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
    </>
  );
};

export default Location;
