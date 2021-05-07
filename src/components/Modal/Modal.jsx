import React from "react";
import styles from "./Modal.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        <FontAwesomeIcon
          onClick={() => setActive(false)}
          icon={faTimes}
          className={styles.close_img}
        />
        <h3>Thank you for your reservation! See you!</h3>
      </div>
    </div>
  );
};

export default Modal;
