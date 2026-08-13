import React from "react";
import FillImage from "../FillImage";
import styles from "./hero.module.css";

export default function HeroSection() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <div className={styles.badge}>Roasted To Perfection</div>

        <h1 className={styles.heading}>
          <span className={styles.headingRow}>
            Healthy{" "}
            <span className={styles.headingAccent}>
              Snacking
              <svg className={styles.headingUnderline} viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M 0 5 Q 50 10 100 5" className={styles.underlinePath} />
              </svg>
            </span>
          </span>
          <span className={`${styles.headingRow} ${styles.headingRowSpaced}`}>
            <span className={styles.headingAccent}>
              Naturally
              <svg className={styles.headingUnderline} viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M 0 5 Q 50 10 100 5" className={styles.underlinePath} />
              </svg>
            </span>{" "}
            Better
          </span>
        </h1>

        <p className={styles.subtext}>
          Our premium roasted makhana is crunchy, light, and packed with nutrients. <br />
          A super snack for your evenings.
        </p>

        <div className={styles.ctaRow}>
          <a href="#shop" className={styles.ctaPrimary}>
            Shop Now <span className={styles.ctaArrow}>→</span>
          </a>
          <a href="#flavors" className={styles.ctaSecondary}>
            Explore Flavors
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.packageWrap}>
          <FillImage
            src="/images/Hero_Image.png"
            alt="Tirahutt Agro Makhana Package on Pedestal"
            priority
            className={styles.packageImage}
          />
        </div>
      </div>
    </main>
  );
}
