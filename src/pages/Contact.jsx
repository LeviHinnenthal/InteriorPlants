import React, { useEffect, useState } from "react";
import contactImage from "../assets/item2.jpg";
import { Input, Button } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Contact = () => {
  // const [curtainHeightContact, setCurtainHeightContact] = useState("100vh");

  useEffect(() => {
    AOS.init();

    // // Después de 0.5 segundos, sube la cortina
    // const timeout = setTimeout(() => {
    //   setCurtainHeightContact(0);
    // }, 500);

    // return () => clearTimeout(timeout);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <>
       {/* <motion.div
        className="contact-curtain bg-primary-100"
        initial={{ height: 0 }}
        animate={{ height: curtainHeightContact }}
        exit={{ height: 0 }}
        transition={{ duration: 0.2}}
      /> */}
      <div className="md:h-[100vh] flex flex-col-reverse md:flex-row m-8 md:m-0 justify-between w-full overflow-hidden">
        <div
          className="left md:w-2/4  flex flex-col items-center justify-center"
          data-aos="fade-right"
        >
          <form onSubmit={handleSubmit} className="w-[95%] md:w-[350px]">
            <p className="text-2xl font-semibold mb-6">Get in touch with us!</p>
            <Input className="mb-4" type="email" label="Email" />
            <Input className="mb-4" type="text" label="Name" />
            <Input className="mb-4" type="text" label="Last Name" />
            <Input className="mb-4" type="text" label="Phone" />
            <Button
              type="submit"
              color="white"
              variant="solid"
              className="bg-primary-100 w-full text-white"
            >
              Send
            </Button>
          </form>
        </div>
        <div
          className="right md:w-2/4 flex items-center justify-center"
          data-aos="fade-left"
        >
          <img
            src={contactImage}
            alt="Contact Image"
            className="mb-10 md:mb-0"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
