import React from "react";
import FillImage from "../FillImage";
import styles from "./recipes.module.css";

const recipes = [
  { id: 1, category: "SNACK", title: "Phool Makhana", subtitle: "Bhel", time: "15 MIN", image: "/images/recipeimage.png" },
  { id: 2, category: "SNACK", title: "Phool Makhana", subtitle: "Bhel", time: "15 MIN", image: "/images/recipeimage.png" },
  { id: 3, category: "SNACK", title: "Phool Makhana", subtitle: "Bhel", time: "15 MIN", image: "/images/recipeimage.png" },
];

export default function RecipesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.badge}>From Our Kitchen</div>
          <h2 className={styles.heading}>
            <span className={styles.headingLine}>
              Recipes &amp;{" "}
              <span className={styles.headingAccent}>
                Ideas
                <svg className={styles.headingUnderline} viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M 0 5 Q 50 10 100 5" className={styles.underlinePath} />
                </svg>
              </span>
            </span>
          </h2>
        </div>

        <div className={styles.grid}>
          {recipes.map((recipe) => (
            <article key={recipe.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <FillImage
                  src={recipe.image}
                  alt={recipe.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{recipe.category}</span>
                <h3 className={styles.title}>{recipe.title}</h3>
                <p className={styles.subtitle}>{recipe.subtitle}</p>
                <span className={styles.time}>{recipe.time}</span>
                <a href="#recipes" className={styles.readMore}>
                  Read More <span className={styles.readMoreArrow}>&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
