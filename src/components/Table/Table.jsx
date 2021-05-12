import React from "react";
import { Link } from "react-router-dom";
import styles from "./Table.module.css";

const Table = (props) => {
  let style = `${styles.cells__item} ${styles.show_more}`;
  let route = "/review";
  let filteredtable = props.handleFilter();

  console.log(filteredtable);

  //if object
  if (props.selectedDate) {
    style = styles.dn;
    route = "/schedule";
    return (
      <ul>
        <li
          key={props.selectedDate.id}
          id={props.selectedDate.id}
          className={styles.cells__item}
        >
          <Link to={route} className={styles.link}>
            <div className={styles.data}>
              <div>img</div>
              {props.selectedDate.barber}
            </div>
            <div className={styles.data}>{props.selectedDate.date}</div>
            <div className={styles.data}>{props.selectedDate.time}</div>
          </Link>
        </li>
      </ul>
    );
  }
  // if array
  const tableItem = filteredtable.map((item) => (
    <li
      key={item.id}
      id={item.id}
      className={styles.cells__item}
      onClick={(e) => props.handleSelect(e.currentTarget.id)}
    >
      <Link to={route} className={styles.link}>
        <div className={styles.data}>
          {props.barbers.map((i) => {
            if (i.name === item.barber) {
              return (
                <div>
                  <img src={i.img} alt="" />
                </div>
              );
            }
          })}

          {item.barber}
        </div>
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
