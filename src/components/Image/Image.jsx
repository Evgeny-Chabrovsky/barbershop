import React from "react";
import Cells from "../Cells/Cells";
import styles from "./Image.module.css";

const Image = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={props.src} alt="" />
      </div>
    </div>
  );
};

export default Image;
