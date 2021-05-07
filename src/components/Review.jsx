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
      <Cells services={props.selectedService} />
      <Table
        handleFilter={props.handleFilter}
        selectedDate={props.selectedDate}
      />

      <Button value="Continue" route="/booking" isRoute={true} />
    </>
  );
};

export default Review;
