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
          <Link href="/">
            <a id="nav">
              <Image src={LogoBanner} alt="Bowl Thai" height="100%" />
            </a>
          </Link>
        </div>
        <div className={styles.navigation_banner}></div>
        <div className={styles.navigation_links}>
          <div className={styles.menuTitles} onClick={setPage("menu")}>
            <Link href="/">
              <a>All Day Menu</a>
            </Link>
          </div>
          <div className={styles.menuTitles} onClick={setPage("hours")}>
            <Link href="/">
              <a>Find Us</a>
            </Link>
          </div>
          <div className={styles.menuTitles}>
            {/* <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref> */}
              <a>Order Online</a>
            {/* </Link> */}
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
            {/* <div onClick={setPage("menu")}> */}
            <div>
              <Link href="/">
                <a>All Day Menu</a>
              </Link>
            </div>
            {/* <div onClick={setPage("hours")}> */}
            <div>
              <Link href="/">
                <a>Find Us</a>
              </Link>
            </div>
            <div>
              {/* <Link href="https://order.mealkeyway.com/merchant/4d5878334b484134416e6171584c4732587739662b413d3d/main" target="_blank" passHref> */}
                <a>Order Online</a>
              {/* </Link> */}
            </div>
            <div className={styles.navigation_menu_location}>
              <Link href="https://goo.gl/maps/eKo6tkVmk8G7rMPA9" target="_blank">
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
