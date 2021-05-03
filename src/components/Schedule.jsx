import React from "react";
import Image from "./Image/Image";
import Table from "./Table/Table";
import Topic from "./Topic/Topic";
import Barbers from "./Barbers/Barbers";

const Schedule = (props) => {
  return (
    <>
      <Image src="images/scissors.jpg" />
      <Barbers />
      <Topic topic="Next Available Appointment:" />
      <Table table={props.table} handleSelect={props.handleSelect} />
    </>
  );
};

export default Schedule;
