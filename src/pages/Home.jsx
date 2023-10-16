import React from "react";
import Services from "../components/Services/Services";
import BestSeller from "../components/BestSeller/BestSeller";
import InteriorReference from "../components/InteriorReference/InteriorReference";
import HowToTakeCare from "../components/HowToTakeCare/HowToTakeCare";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <BestSeller />
      <InteriorReference />
      <HowToTakeCare />
    </>
  );
};

export default Home;
