import React from "react";
import { Link } from "react-router-dom";
import styles from "./Table.module.css";

const Table = (props) => {
  let style = `${styles.cells__item} ${styles.show_more}`;
  let route = "/review";
  if (props.table.length === 1) {
    style = styles.dn;
    route = "/schedule";
  }

  const tableItem = props.table.map((item) => (
    <Link to={route} key={item.id}>
      <li className={styles.cells__item}>
        <div className="service">{item.barber}</div>
        <div className="service">{item.date}</div>
        <div className="service">{item.time}</div>
      </li>
    </Link>
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
