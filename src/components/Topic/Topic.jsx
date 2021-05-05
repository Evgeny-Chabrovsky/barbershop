import React from "react";
import BackButton from "../BackButton/BackButton";
import styles from "./Topic.module.css";

const Topic = (props) => {
  return (
    <div className={styles.container}>
      {props.display ? <BackButton route={props.route} /> : null}
      <h3 className={styles.topic}>{props.topic}</h3>
    </div>
  );
};

export default Topic;
