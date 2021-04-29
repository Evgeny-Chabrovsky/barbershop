import React from "react";

import styles from "./Barbers.module.css";
const Barbers = () => {
  return (
    <>
      <div className={styles.barbers}>
        <p id={styles.selectBarber}>select Barber:</p>
        <form>
          <select id="barber" name="barber">
            <option value="all">All</option>
            <option value="Avi">Avi</option>
            <option value="Gabi">Gabi</option>
            <option value="Hagai">Hagai</option>
          </select>
        </form>
      </div>
    </>
  );
};

export default Barbers;
