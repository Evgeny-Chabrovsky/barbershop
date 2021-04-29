import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <ul className="services">
      <li className="services__item">
        <div className="service">Haircat</div>
        <div className="price">70$</div>
      </li>
      <li className="services__item">
        <div className="service">Long Haircut</div>
        <div className="price">70$</div>
      </li>
      <li className="services__item">
        <div className="service">Kids Cut</div>
        <div className="price">70$</div>
      </li>
      <li className="services__item">
        <div className="service">Wet Shave</div>
        <div className="price">70$</div>
      </li>
      <li className="services__item">
        <div className="service">Head Shave</div>
        <div className="price">70$</div>
      </li>
    </ul>
  );
};

export default Services;
