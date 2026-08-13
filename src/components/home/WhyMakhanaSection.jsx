import React from "react";
import FillImage from "../FillImage";
import { FaBone, FaBolt, FaLeaf, FaFire } from "react-icons/fa";
import { FaWheatAwn } from "react-icons/fa6";
import styles from "./why.module.css";

function BondIcon() {
  return (
    <svg viewBox="0 0 100 60" aria-hidden="true" className={styles.bondIcon}>
      <path
        d="M30 5 L50 15 L50 35 L30 45 L10 35 L10 15 Z"
        className={styles.bondPath}
      />
      <path
        d="M70 5 L90 15 L90 35 L70 45 L50 35 L50 15 Z"
        className={styles.bondPath}
      />
    </svg>
  );
}

function CardIcon({ icon }) {
  switch (icon) {
    case "bone":
      return <FaBone aria-hidden="true" />;
    case "bolt":
      return <FaBolt aria-hidden="true" />;
    case "wheat":
      return <FaWheatAwn aria-hidden="true" />;
    case "leaf":
      return <FaLeaf aria-hidden="true" />;
    case "fire":
      return <FaFire aria-hidden="true" />;
    case "bonds":
      return <BondIcon />;
    default:
      return null;
  }
}

const leftCards = [
  { label: "Rich In", value: "Calcium", icon: "bone", color: "#BACF6B" },
  { label: "High In", value: "Protein", icon: "bolt", color: "#FDDF7B" },
  { label: "Gluten", value: "Free", icon: "wheat", color: "#DDCAE2" },
];

const rightCards = [
  { label: "Antioxidant", value: "Rich", icon: "bonds", color: "#E2E1A3" },
  { label: "Low In", value: "Calories", icon: "leaf", color: "#FDB89A" },
  { label: "Roasted", value: "Not Fried", icon: "fire", color: "#FB8E5D" },
];

function CardStack({ cards }) {
  return (
    <div className={styles.cardStack}>
      {cards.map((card) => (
        <div key={card.value} className={styles.card} style={{ backgroundColor: card.color }}>
          <div className={styles.cardIcon}>
            <CardIcon icon={card.icon} />
          </div>
          <div>
            <div className={styles.cardLabel}>{card.label}</div>
            <div className={styles.cardValue}>{card.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function WhyMakhanaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.leftContent}>
            <div className={styles.badge}>Why Makhana ?</div>
            <h2 className={styles.heading}>
              <span className={styles.headingLine}>Small Seed</span>
              <span className={styles.headingLine}>
                <span className={styles.headingAccent}>
                  Big
                  <svg className={styles.headingUnderline} viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M 0 5 Q 50 10 100 5" className={styles.underlinePath} />
                  </svg>
                </span>{" "}
                Benefits
              </span>
            </h2>
            <p className={styles.subtitle}>
              Makhana is not just a snack,
              <br />
              it&apos;s a superfood.
            </p>
            <svg className={styles.arrowSvg} viewBox="0 0 100 100" aria-hidden="true">
              <path
                d="M 25 5
                   C 45 18, 72 35, 78 50
                   C 84 66, 50 84, 5 88
                   M 5 88
                   L 15 68
                   M 5 88
                   L 25 96"
                className={styles.underlinePath}
              />
            </svg>
          </div>
        </div>

        <div className={styles.right}>
          <CardStack cards={leftCards} />
          <div className={styles.bowl}>
            <FillImage
              src="/images/MakhanaBowl.png"
              alt="Bowl of Makhana"
              className={styles.bowlImage}
            />
          </div>
          <CardStack cards={rightCards} />
        </div>
      </div>
    </section>
  );
}
