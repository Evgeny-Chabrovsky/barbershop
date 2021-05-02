import React from "react";
import Cells from "./Cells/Cells";

import Topic from "./Topic/Topic";
import Image from "./Image/Image";

const services = [
  { id: 1, title: "Haircut", price: 70 },
  { id: 2, title: "Long Haircut", price: 100 },
  { id: 3, title: "Kids Cut", price: 120 },
  { id: 4, title: "Wet Shave", price: 50 },
  { id: 5, title: "Head Shave", price: 60 },
];
const Services = () => {
  return (
    <div>
      <Image />
      <Topic topic="Select a service" />
      <Cells services={services} />
    </div>
  );
};

export default Services;
