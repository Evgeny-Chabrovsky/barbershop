import React from "react";
import Button from "./Button/Button";
import Form from "./Form/Form";
import Image from "./Image/Image";
import Topic from "./Topic/Topic";
const Booking = () => {
  return (
    <>
      <Image src="images/email.jpg" />
      <Topic topic="Enter your contact information:" />
      <Form />
      <Button value="Booking" />
    </>
  );
};

export default Booking;
