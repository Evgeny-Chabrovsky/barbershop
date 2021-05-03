import React from "react";
import Cells from "./Cells/Cells";

import Topic from "./Topic/Topic";
import Image from "./Image/Image";

const Services = (props) => {
  return (
    <div>
      <Image />
      <Topic topic="Select a service" />
      <Cells services={props.services} handleSelect={props.handleSelect} />
    </div>
  );
};

export default Services;
