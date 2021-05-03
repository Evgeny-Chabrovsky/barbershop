import React from "react";
import { Link } from "react-router-dom";
import styles from "./Table.module.css";

const Table = (props) => {
  let style = `${styles.cells__item} ${styles.show_more}`;
  let route = "/review";
  //if object
  if (Array.isArray(props.table) === false) {
    style = styles.dn;
    route = "/schedule";

    return (
      <ul>
        <li
          key={props.table.id}
          id={props.table.id}
          className={styles.cells__item}
          // onClick={(e) => props.handleSelect(e.currentTarget.id)}
        >
          <Link to={route} className={styles.link}>
            <div className={styles.data}>{props.table.barber}</div>
            <div className={styles.data}>{props.table.date}</div>
            <div className={styles.data}>{props.table.time}</div>
          </Link>
        </li>
      </ul>
    );
  }
  // if array
  const tableItem = props.table.map((item) => (
    <li
      key={item.id}
      id={item.id}
      className={styles.cells__item}
      onClick={(e) => props.handleSelect(e.currentTarget.id)}
    >
      <Link to={route} className={styles.link}>
        <div className={styles.data}>{item.barber}</div>
        <div className={styles.data}>{item.date}</div>
        <div className={styles.data}>{item.time}</div>
      </Link>
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
