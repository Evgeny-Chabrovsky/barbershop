import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DetailsDialog from "../DetailsDialog/DetailsDialog";
import styles from "./Cells.module.css";

const Cells = (props) => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index, e) => {
    e.preventDefault();
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  let style = styles.services;
  let route = "/schedule";
  const content = props.services.map((service, index) => (
    <li
      className={styles.cells__item}
      key={service.id}
      id={service.id}
      onClick={
        props.services.length === 1
          ? undefined
          : (e) => props.handleSelect(e.currentTarget.id)
      }
    >
      <Link
        to={route}
        className={styles.link} /* onClick={() => toggle(index)} */
      >
        <div className={styles.serviceName}>{service.title}</div>
        <div className={styles.price}>{service.price}$</div>
        <div className={styles.details} onClick={(e) => toggle(index, e)}>
          <FontAwesomeIcon icon={faQuestion} className={styles.question} />
        </div>
      </Link>
      {clicked === index ? <DetailsDialog /> : null}
    </li>
  ));
  return (
    <>
      <ul className={style}>{content}</ul>
    </>
  );
};

export default Cells;
