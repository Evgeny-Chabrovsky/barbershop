import React from "react";
import Image from "./Image/Image";
import Topic from "./Topic/Topic";
import Cells from "./Cells/Cells";
import Table from "./Table/Table";
import Button from "./Button/Button";

const Review = (props) => {
  return (
    <>
      <Image src="images/hairbrush.jpg" />
      <Topic topic="Review booking details:" route="/schedule" display={true} />
      <Cells
        isSelected={true}
        services={props.selectedService}
        handleSelect={props.handleSelect}
        route="/review"
      />
      <Table
        isSelected={true}
        handleSelect={props.handleSelect}
        handleFilter={props.handleFilter}
        selectedDate={props.selectedDate}
        barbers={props.barbers}
        route="/review"
      />

      <Button value="Continue" route="/booking" isRoute={true} />
    </>
  );
};

export default Review;
