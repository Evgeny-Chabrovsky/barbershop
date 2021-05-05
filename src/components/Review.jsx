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
      <Topic topic="Review booking details:" />
      <Cells services={props.selectService} />
      <Table
        handleFilter={props.handleFilter}
        selectedDate={props.selectedDate}
      />

      <Button value="Continue" route="/booking" />
    </>
  );
};

export default Review;
