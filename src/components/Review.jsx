import React from "react";
import Image from "./Image/Image";
import Topic from "./Topic/Topic";
import Cells from "./Cells/Cells";
import Table from "./Table/Table";
import Button from "./Button/Button";
import { Link } from "react-router-dom";

const services = [{ id: 1, title: "Haircut", price: 70 }]; //то что выбрал пользователь

const table = [
  { id: 1, barber: "Avi", date: "Thursday, April 29th", time: "17:00" },
];
const Review = () => {
  return (
    <>
      <Image src="images/hairbrush.jpg" />
      <Topic topic="Review booking details:" />
      <Cells services={services} />
      <Table table={table} />
      <Link to="/booking">
        <Button value="Continue" />
      </Link>
    </>
  );
};

export default Review;
