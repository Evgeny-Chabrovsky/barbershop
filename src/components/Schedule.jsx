import React from "react";
import Image from "./Image/Image";
import Table from "./Table/Table";
import Topic from "./Topic/Topic";
import Button from "./Button/Button";
import Barbers from "./Barbers/Barbers";

const Schedule = () => {
  return (
    <>
      <Image src="images/scissors.jpg" />
      <Barbers />
      <Topic topic="Next Available Appointment:" />
      <Table />
      <Button value="Continue" />
    </>
  );
};

export default Schedule;
