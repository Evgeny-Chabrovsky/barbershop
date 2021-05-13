import React from "react";
import Image from "./Image/Image";
import Table from "./Table/Table";
import Topic from "./Topic/Topic";
import Barbers from "./Barbers/Barbers";
import Cells from "./Cells/Cells";

const Schedule = (props) => {
  return (
    <>
      <Image src="images/scissors.jpg" />
      <Barbers barbers={props.barbers} onBarberSelect={props.onBarberSelect} />
      <Topic topic="Next Available Appointment:" route={"/"} display={true} />
      <Cells
        services={props.selectedService}
        handleSelect={props.handleSelect}
        route="/schedule"
      />
      <Table
        handleFilter={props.handleFilter}
        handleSelect={props.handleSelect}
        barbers={props.barbers}
        route="/review"
      />
    </>
  );
};
export default Schedule;
