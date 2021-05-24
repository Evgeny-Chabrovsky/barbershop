import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DetailsDialog from "../DetailsDialog/DetailsDialog";
import styles from "./Cells.module.css";

const Cells = (props) => {
  const [clicked, setClicked] = useState(false);
  //display DetailsDialog component
  const toggle = (index, e) => {
    e.preventDefault();
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const content = props.services.map((service, index) => (
    <li
      className={
        props.isSelected
          ? `${styles.cells__item} ${styles.cells__item__selected}`
          : styles.cells__item
      }
      key={service.id}
      id={service.id}
      onClick={
        props.services.length === 1
          ? null
          : (e) => props.handleSelect(e.currentTarget.id)
      }
    >
      <Link to={props.route} className={styles.link}>
        <div className={styles.serviceName}>{service.title}</div>
        <div className={styles.price}>{service.price}$</div>
        <div className={styles.details} onClick={(e) => toggle(index, e)}>
          <FontAwesomeIcon icon={faInfoCircle} className={styles.question} />
        </div>
      </Link>
      {clicked === index ? <DetailsDialog image={service.image} /> : null}
    </li>
  ));
  return (
    <>
      <ul className={styles.services}>{content}</ul>
    </>
  );
};

export default Cells;
