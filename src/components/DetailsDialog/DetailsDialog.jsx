import React from "react";
import styles from "./DetailsDialog.module.css";

const DetailsDialog = (props) => {
  return (
    <div className={styles.madal_content}>
      <div>
        <img src={props.image} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat
        labore error earum nulla non optio voluptas, dolorum blanditiis iusto
        expedita reiciendis necessitatibus molestiae a delectus, nisi dicta,
        beatae praesentium.
      </p>
    </div>
  );
};

export default DetailsDialog;
