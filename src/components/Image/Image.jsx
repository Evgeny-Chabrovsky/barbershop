import React from "react";
import styles from "./Image.module.css";
import img from "../../images/barbershop.jpg";

const Image = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={img} alt="barbershop" />
      </div>
    </div>
  );
};

export default Image;
