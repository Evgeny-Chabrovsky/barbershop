import React from "react";
import { Link } from "react-router-dom";
import styles from "./Table.module.css";

const Table = (props) => {
  let filteredTable = props.selectedDate
    ? props.selectedDate
    : props.handleFilter();

  const tableItem = filteredTable
    .slice(0, props.itemsToShowDate)
    .map((item) => (
      <li
        key={item.id}
        id={item.id}
        className={styles.cells__item}
        onClick={
          filteredTable.length === 1
            ? undefined
            : (e) => props.handleSelect(e.currentTarget.id)
        }
      >
        <Link to={props.route} className={styles.link}>
          <div className={styles.data}>
            {props.barbers.map((i, index) => {
              if (i.name === item.barber) {
                return (
                  <div key={index}>
                    <img src={i.img} alt="" />
                  </div>
                );
              } else {
                return null;
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

      {tableItem.length === 1 ? null : (
        <li
          className={`${styles.cells__item} ${styles.show_more}`}
          onClick={() => props.handleDateShowMore()}
        >
          <div className="service">Show More</div>
        </li>
      )}
    </ul>
  );
};

export default Table;
