import React from "react";
import { FaSmile, FaLeaf, FaFlask, FaFire } from "react-icons/fa";
import styles from "./stats.module.css";

function StatIcon({ type }) {
  switch (type) {
    case "smile":
      return <FaSmile aria-hidden="true" />;
    case "leaf":
      return <FaLeaf aria-hidden="true" />;
    case "flask":
      return <FaFlask aria-hidden="true" />;
    case "fire":
      return <FaFire aria-hidden="true" />;
    default:
      return null;
  }
}

const stats = [
  { value: "10,000+", label: "Happy Customers", color: "#FDDF7B", icon: "smile" },
  { value: "100%", label: "Natural", color: "#DDCAE2", icon: "leaf" },
  { value: "No", label: "Preservatives", color: "#BCCF6B", icon: "flask" },
  { value: "Roasted", label: "Not Fried", color: "#FB8E5E", icon: "fire" },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.card} style={{ backgroundColor: stat.color }}>
            <div className={styles.iconCircle}>
              <StatIcon type={stat.icon} />
            </div>
            <div>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
