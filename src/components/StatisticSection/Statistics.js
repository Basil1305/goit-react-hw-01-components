import React from "react";
import styles from "./Statistics.module.css";
import data from "./statistical-data.json";
export default function Statistics({ title }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {data.map((i) => (
          <li key={i.id} className={styles.item}>
            <span className={styles.label}>{i.label}</span>
            <span className={styles.percentage}>{i.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.defaultProps = {
  title: " ",
};
