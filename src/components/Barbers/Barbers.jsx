import React from "react";
import styles from "./Barbers.module.css";

const Barbers = (props) => {
  const { barbers, onBarberSelect } = props;

  return (
    <div className={styles.barbers}>
      <p id={styles.selectBarber}>select Barber:</p>
      <form>
        <select
          id="barber"
          name="barber"
          onChange={(e) => {
            onBarberSelect(e.target.options[e.target.selectedIndex].text);
          }}
        >
          <option value="all">All</option>
          {barbers.map((barber, index) => (
            <option key={index} value={barber}>
              {barber}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Barbers;
