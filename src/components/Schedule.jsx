import React from "react";
import Image from "./Image/Image";
import Table from "./Table/Table";
import Topic from "./Topic/Topic";
import Barbers from "./Barbers/Barbers";

const table = [
  { id: 1, barber: "Avi", date: "Thursday, April 29th", time: "17:00" },
  { id: 2, barber: "Avi", date: "Thursday, April 29th", time: "18:00" },
  { id: 3, barber: "Gabi", date: "Thursday, April 30th", time: "12:00" },
  { id: 4, barber: "Hagai", date: "Thursday, April 30th", time: "13:00" },
];

const Schedule = () => {
  return (
    <>
      <Image src="images/scissors.jpg" />
      <Barbers />
      <Topic topic="Next Available Appointment:" />
      <Table table={table} />
    </>
  );
};

export default Schedule;
