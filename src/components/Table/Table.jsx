import React from "react";
import styles from "./Table.module.css";

const Table = (props) => {
  let style =
    props.table.length === 1
      ? styles.dn
      : `${styles.cells__item} ${styles.show_more}`;
  const tableItem = props.table.map((item) => (
    <li key={item.id} className={styles.cells__item}>
      <div className="service">{item.barber}</div>
      <div className="service">{item.date}</div>
      <div className="service">{item.time}</div>
    </li>
  ));

  return (
    <ul>
      {tableItem}

      <li className={style}>
        <div className="service">Show More</div>
      </li>
    </ul>
  );
};

export default Table;
