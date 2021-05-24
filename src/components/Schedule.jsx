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
      <Topic topic="Next Available Appointment:" route={"/"} display={true} />
      <Cells
        isSelected={true}
        services={props.selectedService}
        handleSelect={props.handleSelect}
        route="/schedule"
      />
      <Barbers
        barbers={props.barbers}
        onSelectBarber={props.onSelectBarber}
        selectedBarber={props.selectedBarber}
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
