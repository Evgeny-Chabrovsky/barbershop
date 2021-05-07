import React, { useState } from "react";
import Cells from "./Cells/Cells";
import Topic from "./Topic/Topic";
import Image from "./Image/Image";
import styles from "./Services.module.css";

const Services = (props) => {
  return (
    <div>
      <Image />
      <Topic topic="Select a service" display={false} route="/" />
      <Cells
        services={props.services}
        handleSelect={props.handleSelect}
        // setModalActive={setModalActive}
      />
    </div>
  );
};

export default Services;
