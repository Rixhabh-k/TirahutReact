import React, { useEffect, useState } from "react";
import FillImage from "./FillImage";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setVisible(true);
      } else {
        setVisible(y < lastY);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`${styles.wrapper} ${visible ? styles.visible : styles.hidden}`}>
      <header className={styles.header}>
        <a href="/" className={styles.logoLink} onClick={closeMenu}>
          <div className={styles.logo}>
            <FillImage
              src="/images/Logo.png"
              alt="Tirahutt Agro Logo"
              className={styles.logoImage}
              priority
            />
          </div>
        </a>

        <nav className={styles.nav}>
          <a href="/" className={`${styles.navLink} ${styles.navHome}`}>Home</a>
          <a href="#product" className={styles.navLink}>Product</a>
          <a href="#recipes" className={styles.navLink}>Recipes</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#reviews" className={styles.navLink}>Reviews</a>
        </nav>

        <div className={styles.actions}>
          <a href="#shop" className={styles.shopButton}>
            Shop Now
          </a>

          <button className={styles.cartButton}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={styles.cartIcon}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </button>

          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={styles.menuIcon}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className={styles.mobileMenu}>
          <a href="/" className={`${styles.navLink} ${styles.navHome}`} onClick={closeMenu}>Home</a>
          <a href="#product" className={styles.navLink} onClick={closeMenu}>Product</a>
          <a href="#recipes" className={styles.navLink} onClick={closeMenu}>Recipes</a>
          <a href="#about" className={styles.navLink} onClick={closeMenu}>About</a>
          <a href="#reviews" className={styles.navLink} onClick={closeMenu}>Reviews</a>
          <a href="#shop" className={styles.shopButton} onClick={closeMenu}>
            Shop Now
          </a>
        </nav>
      )}
    </div>
  );
}
