import React from "react";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Modal = ({ active, setActive }) => {
  let history = useHistory();
  function handleClick() {
    history.push("/");
  }
  function handleRoute() {
    const promise = new Promise((resolve, reject) => {
      setActive(false);
    });
    promise.then(handleClick());
  }

  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={handleRoute}
    >
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon
          onClick={handleRoute}
          icon={faTimes}
          className={styles.close_img}
        />
        <h3>Thank you for your reservation! See you!</h3>
      </div>
    </div>
  );
};

export default Modal;
