import React, { useEffect, useState } from "react";
import Services from "../components/Services/Services";
import BestSeller from "../components/BestSeller/BestSeller";
import InteriorReference from "../components/InteriorReference/InteriorReference";
import HowToTakeCare from "../components/HowToTakeCare/HowToTakeCare";
import Banner from "../components/Banner/Banner";
import { motion } from "framer-motion";

const Home = () => {
  // const [curtainHeightHome, setCurtainHeightHome] = useState("100vh");

  // useEffect(() => {
  //   // Después de 0.5 segundos, sube la cortina
  //   const timeout = setTimeout(() => {
  //     setCurtainHeightHome(0);
  //   }, 500);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div className="overflow-hidden">
      {/* <motion.div
        className="contact-curtain bg-primary-100"
        initial={{ height: 0 }}
        animate={{ height: curtainHeightHome }}
        exit={{ height: 0 }}
        transition={{ duration: 0.2 }}
      /> */}
      <Banner />
      <Services />
      <BestSeller />
      <InteriorReference />
      <HowToTakeCare />
    </div>
  );
};

export default Home;
