import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cells.module.css";
const Cells = (props) => {
  let style = styles.services;
  let route = "/schedule";

  if (props.services.length === 1) {
    style = `${styles.services} ${styles.pb1}`;
    route = "/";
  }

  const content = props.services.map((service) => (
    <Link to={route} key={service.id}>
      <li className={styles.cells__item}>
        <div>{service.title}</div>
        <div className={styles.price}>{service.price}$</div>
      </li>
    </Link>
  ));
  return <ul className={style}>{content}</ul>;
};

export default Cells;
