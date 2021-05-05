import React from "react";
import { Link } from "react-router-dom";
import styles from "./BackButton.module.css";

const BackButton = (props) => {
  return (
    <div className={styles.link_style}>
      <Link className={styles.link} to={props.route}>
        Back
      </Link>
    </div>
  );
};

export default BackButton;
