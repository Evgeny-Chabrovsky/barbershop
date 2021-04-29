import React from "react";
import Button from "../Button/Button";
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
      <p id={styles.available}>Next Available Appointment:</p>

      <ul className="services">
        <li className="services__item">
          <div className="service">Avi</div>
          <div className="service">Thursday, April 29th</div>
          <div className="service">17:00</div>
        </li>
        <li className="services__item">
          <div className="service">Avi</div>
          <div className="service">Thursday, April 29th</div>
          <div className="service">17:00</div>
        </li>
        <li className="services__item">
          <div className="service">Avi</div>
          <div className="service">Thursday, April 29th</div>
          <div className="service">17:00</div>
        </li>
        <li className="services__item">
          <div className="service">Avi</div>
          <div className="service">Thursday, April 29th</div>
          <div className="service">17:00</div>
        </li>
        <li className="services__item show_more">
          <div className="service">Show More</div>
        </li>
      </ul>
      <Button value="Continue" />
    </>
  );
};

export default Barbers;
