import React from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";
const Form = (props) => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Name" />
      <input className={styles.input} type="phone" placeholder="Phone" />
      <input className={styles.input} type="email" placeholder="Email" />
      <Button value="Booking" setActive={props.setActive} isRoute={false} />
    </form>
  );
};

export default Form;
