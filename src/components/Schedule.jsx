import React from "react";
import Image from "./Image/Image";
import Table from "./Table/Table";
import Topic from "./Topic/Topic";
import Barbers from "./Barbers/Barbers";

const Schedule = (props) => {
  return (
    <>
      <Image src="images/scissors.jpg" />
      <Barbers barbers={props.barbers} onBarberSelect={props.onBarberSelect} />
      <Topic topic="Next Available Appointment:" />
      <Table
        handleFilter={props.handleFilter}
        handleSelect={props.handleSelect}
      />
    </>
  );
};
export default Schedule;
