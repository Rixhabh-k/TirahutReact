import React from "react";
import FillImage from "./FillImage";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import styles from "./Footer.module.css";

const shopLinks = [
  { label: "All products", href: "#shop" },
  { label: "Bundles", href: "#shop" },
  { label: "Subscriptions", href: "#shop" },
  { label: "Gift Cards", href: "#shop" },
];

const companyLinks = [
  { label: "Our Story", href: "#about" },
  { label: "Impact", href: "#about" },
  { label: "Wholesale", href: "#about" },
  { label: "Careers", href: "#about" },
];

const supportLinks = [
  { label: "Shipping Info", href: "#support" },
  { label: "Return Policy", href: "#support" },
  { label: "Accessibility", href: "#support" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <FillImage
                src="/images/Logo.png"
                alt="Tirahutt Agro Logo"
                className={styles.logoImage}
              />
            </div>
          </a>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} aria-label="WhatsApp">
              <FaWhatsapp className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <FaFacebookF className={styles.socialIcon} />
            </a>
          </div>
        </div>

        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Shop</h3>
          <ul className={styles.columnList}>
            {shopLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.columnLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Company</h3>
          <ul className={styles.columnList}>
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.columnLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Support</h3>
          <ul className={styles.columnList}>
            {supportLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.columnLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
