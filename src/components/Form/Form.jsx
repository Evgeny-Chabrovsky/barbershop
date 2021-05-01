import React from "react";
import styles from "./Form.module.css";
const Form = () => {
  return (
    <form className={styles.form} /* onSubmit={this.handleSubmit} */>
      <input
        className={styles.input}
        type="text"
        // value={this.state.value}
        /* onChange={this.handleChange} */
        placeholder="Name"
      />
      <input className={styles.input} type="phone" placeholder="Phone" />
      <input className={styles.input} type="email" placeholder="Email" />
    </form>
  );
};

export default Form;
