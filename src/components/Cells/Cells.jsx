import React from "react";
import styles from "./Cells.module.css";
const Cells = (props) => {
  let style =
    props.services.length === 1
      ? `${styles.services} ${styles.pb1}`
      : styles.services;
  // console.log(style);

  const content = props.services.map((service) => (
    <li key={service.id} className={styles.cells__item}>
      <div>{service.title}</div>
      <div className={styles.price}>{service.price}$</div>
    </li>
  ));
  return <ul className={style}>{content}</ul>;
};

export default Cells;
