import React from "react";
import styles from "./Barbers.module.css";

const Barbers = (props) => {
  const { barbers, onBarberSelect } = props;

  return (
    <div className={styles.barbers}>
      <p id={styles.selectBarber}>Choose Barber:</p>
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
            <option key={index} value={barber.name}>
              {barber.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Barbers;
