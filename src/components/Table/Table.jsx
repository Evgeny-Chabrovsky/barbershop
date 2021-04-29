import React from "react";
import styles from "../Cells/Cells.module.css";

const Table = () => {
  return (
    <ul className={styles.cells__item}>
      <li className={styles.cells__item}>
        <div className="service">Avi</div>
        <div className="service">Thursday, April 29th</div>
        <div className="service">17:00</div>
      </li>
      <li className={styles.cells__item}>
        <div className="service">Avi</div>
        <div className="service">Thursday, April 29th</div>
        <div className="service">17:00</div>
      </li>
      <li className={styles.cells__item}>
        <div className="service">Avi</div>
        <div className="service">Thursday, April 29th</div>
        <div className="service">17:00</div>
      </li>
      <li className={styles.cells__item}>
        <div className="service">Avi</div>
        <div className="service">Thursday, April 29th</div>
        <div className="service">17:00</div>
      </li>
      <li className="services__item show_more">
        <div className="service">Show More</div>
      </li>
    </ul>
  );
};

export default Table;
