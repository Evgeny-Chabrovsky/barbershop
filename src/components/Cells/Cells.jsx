import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cells.module.css";

const Cells = (props) => {
  let style = styles.services;
  let route = "/schedule";

  //if object
  if (Array.isArray(props.services) === false) {
    style = `${styles.services} ${styles.pb1}`;
    route = "/";

    return (
      <ul className={style}>
        <li
          className={styles.cells__item_selected}
          key={props.services.id}
          id={props.services.id}
        >
          <div className={styles.link}>
            <div className={styles.serviceName}>{props.services.title}</div>
            <div className={styles.price}>{props.services.price}$</div>
          </div>
        </li>
      </ul>
    );
  }
  //if array
  const content = props.services.map((service) => (
    <li
      className={styles.cells__item}
      key={service.id}
      id={service.id}
      onClick={(e) => props.handleSelect(e.currentTarget.id)}
    >
      <Link to={route} className={styles.link}>
        <div className={styles.serviceName}>{service.title}</div>
        <div className={styles.price}>{service.price}$</div>
      </Link>
    </li>
  ));
  return <ul className={style}>{content}</ul>;
};

export default Cells;
