import React from "react";
import styles from "./Topic.module.css";

const Topic = (props) => {
  return <h3 className={styles.topic}>{props.topic}</h3>;
};

export default Topic;
