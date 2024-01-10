import { React, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const About = () => {
  // const [curtainHeightAbout, setCurtainHeightAbout] = useState("100vh");

  useEffect(() => {
    AOS.init();

    // // Después de 0.5 segundos, sube la cortina
    // const timeout = setTimeout(() => {
    //   setCurtainHeightAbout(0);
    // }, 500);

    // return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* <motion.div
        className="contact-curtain bg-primary-100"
        initial={{ height: 0 }}
        animate={{ height: curtainHeightAbout }}
        exit={{ height: 0 }}
        transition={{ duration: 0.2 }}
      /> */}
    </>
  );
};

export default About;
