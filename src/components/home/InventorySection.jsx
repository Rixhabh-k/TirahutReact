import React from "react";
import FillImage from "../FillImage";
import styles from "./inventory.module.css";

const products = [
  { id: 1, name: "Peri Peri Inferno", image: "/images/item1.png" },
  { id: 2, name: "Tommy Tom's", image: "/images/item2.png" },
  { id: 3, name: "Good Food Co.", image: "/images/item3.png" },
  { id: 4, name: "Spicy Makhana", image: "/images/item4.png" },
];

export default function InventorySection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.badge}>Our Inventory</div>
        <h2 className={styles.heading}>
          <span className={styles.headingRow}>
            Pick Your{" "}
            <span className={styles.headingAccent}>
              Poison
              <svg className={styles.headingUnderline} viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M 0 5 Q 50 10 100 5" className={styles.underlinePath} />
              </svg>
            </span>
          </span>
        </h2>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <FillImage
                src={product.image}
                alt={product.name}
                className={styles.image}
              />
            </div>
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.details}>100gm / Roasted / Vegan</p>
            <a href="#shop" className={styles.orderButton}>
              Recipe
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
