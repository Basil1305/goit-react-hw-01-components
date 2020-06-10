import React from "react";
import PropTypes from "prop-types";
import data from "../Data/statistical-data.json";
import s from "./Statistics.module.css";

export default function Statistics({ title }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statList}>
        {data.map((i) => (
          <li key={i.id} className={s.item}>
            <span className={s.label}>{i.label}</span>
            <span className={s.percentage}>{i.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.defaultProps = {
  title: " ",
};
Statistics.propTypes = {
  title: PropTypes.string,
};
