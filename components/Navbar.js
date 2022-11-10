import Link from "next/link";
import Image from "next/image";
import LogoBanner from "../public/images/LogoWithTransparency3.png";
import styles from "../styles/navigation.module.css";
import { useState } from "react";

const Navbar = ({ setActivePage }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);
  const showNav = () => {
    setShowNavigationMenu(!showNavigationMenu);
  };
  const setShowMenuDropdown = () => {
    setShowMenu(!showMenu);
  };

  const setPage = (newPage) => () => {
    setActivePage(newPage);
  };
  return (
    <>
      <div className={styles.navigation_container}>
        <div className={styles.navigation_banner} onClick={setPage("home")}>
          <Link href="/" passHref>
            <Image
              src={LogoBanner}
              alt="Click here to go to the Homepage"
              height="100%"
              style={{
                maxWidth: "100%",
              }}
            />
          </Link>
        </div>
        <div className={styles.navigation_banner}></div>
        <div className={styles.navigation_links}>
          <div className={styles.menuTitles} onClick={setPage("menu")}>
            <Link href="/" passHref>
              All Day Menu
            </Link>
          </div>
          <div className={styles.menuTitles} onClick={setPage("faqs")}>
            <Link href="/" passHref>
              FAQs
            </Link>
          </div>
          <div className={styles.menuTitles} onClick={setPage("hours")}>
            <Link href="/" passHref>
              Find Us
            </Link>
          </div>
          <div className={styles.menuTitles}>
            <Link
              href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main"
              target="_blank"
              passHref
            >
              Order Online
            </Link>
          </div>
        </div>
        <div className={styles.navigation_menu} onClick={showNav}>
          <div className={styles.navigation_menu_container}>
            <div
              className={
                showNavigationMenu
                  ? `${styles.navigation_menu_bar1} ${styles.navigation_menu_bar1_close}`
                  : styles.navigation_menu_bar1
              }
            ></div>
            <div
              className={
                showNavigationMenu
                  ? `${styles.navigation_menu_bar2} ${styles.navigation_menu_bar2_close}`
                  : styles.navigation_menu_bar2
              }
            ></div>
            <div
              className={
                showNavigationMenu
                  ? `${styles.navigation_menu_bar3} ${styles.navigation_menu_bar3_close}`
                  : styles.navigation_menu_bar3
              }
            ></div>
          </div>
          <div
            className={
              showNavigationMenu ? styles.navigation_menu_list : styles.hide
            }
          >
            <div onClick={setPage("menu")}>
              <Link href="/" passHref>
                All Day Menu
              </Link>
            </div>
            <div onClick={setPage("faqs")}>
              <Link href="/" passHref>
                FAQs
              </Link>
            </div>
            <div onClick={setPage("hours")}>
              <Link href="/" passHref>
                Find Us
              </Link>
            </div>
            <div>
              <Link
                href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main"
                target="_blank"
                passHref
              >
                Order Online
              </Link>
            </div>
            <div className={styles.navigation_menu_location}>
              <div>Open Everyday Except Weds</div>
              <div>11AM - 2PM</div>
              <div>4:30PM - 9PM</div>
              <div>Kitchen closed at 8:30PM</div>
              <Link
                href="https://goo.gl/maps/eKo6tkVmk8G7rMPA9"
                target="_blank"
                passHref
              >
                13325 N MacArthur Blvd, Oklahoma City, OK 73142
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
