import React from "react";
import styles from "./DetailsDialog.module.css";
import img from "../../images/haircut.jpg";

const DetailsDialog = () => {
  return (
    <div className={styles.madal_content}>
      <div>
        <img src={img} alt="" />
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
