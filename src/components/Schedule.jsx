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
      <Barbers
        barbers={props.barbers}
        onSelectBarber={props.onSelectBarber}
        selectedBarber={props.selectedBarber}
      />
      <Topic topic="Next Available Appointment:" route={"/"} display={true} />
      <Cells
        services={props.selectedService}
        handleSelect={props.handleSelect}
        route="/schedule"
      />
      <Table
        handleDateShowMore={props.handleDateShowMore}
        handleFilter={props.handleFilter}
        handleSelect={props.handleSelect}
        barbers={props.barbers}
        itemsToShowDate={props.itemsToShowDate}
        route="/review"
      />
    </>
  );
};
export default Schedule;
