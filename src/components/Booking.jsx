import React, { useState } from "react";

import Form from "./Form/Form";
import Image from "./Image/Image";
import Modal from "./Modal/Modal";
import Topic from "./Topic/Topic";
const Booking = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <Image src="images/email.jpg" />
      <Topic
        topic="Enter your contact information:"
        display={true}
        route="/review"
      />
      <Form setActive={setModalActive} />
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default Booking;
