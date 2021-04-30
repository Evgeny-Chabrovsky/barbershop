import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <div className={styles.button}>
      <button type="button">{props.value}</button>
    </div>
  );
};

export default Button;
