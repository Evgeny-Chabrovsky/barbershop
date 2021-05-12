import React from "react";
import styles from "./Button.module.css";
import { useHistory } from "react-router-dom";

const Button = (props) => {
  let history = useHistory();
  function handleClick() {
    history.push(props.route);
  }

  return (
    <div className={styles.button}>
      <button type="submit" onClick={props.isRoute ? handleClick : undefined}>
        {props.value}
      </button>
    </div>
  );
};

export default Button;
