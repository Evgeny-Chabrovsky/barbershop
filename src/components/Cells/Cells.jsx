import React from "react";
import styles from "./Cells.module.css";
const Cells = (props) => {
  const content = props.services.map((service) => (
    <li key={service.id} className={styles.cells__item}>
      <div>{service.title}</div>
      <div className={styles.price}>{service.price}$</div>
    </li>
  ));
  return <ul>{content}</ul>;
};

export default Cells;
