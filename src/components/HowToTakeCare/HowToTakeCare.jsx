import React, {useEffect} from "react";
import HowToTakeCareItem from "./HowToTakeCareItem";
import howToTakeCare from "../../assets/howToTakeCare.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const HowToTakeCare = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col md:flex-row mx-auto my-10 md:my-40 items-center w-[90%] md:w-[85%] max-w-[1050px]">
      <div className="flex flex-col items-start md:w-2/4" data-aos="fade-right"  data-aos-offset="150">
        <p className="text-4xl font-bold text-left">
          How to care <br className="desktopElement"/> for plants
        </p>
        <p className="text-md mt-4 mb-6">
          Take care of plants with all your heart
        </p>
        <div className="md:w-[40vw]">
          <HowToTakeCareItem />
        </div>
      </div>
      <div className="md:w-2/4 flex justify-center" data-aos="fade-left"  data-aos-offset="150">
        <img
          className="my-10 md:h-[30vw] md:w-[30vw] "
          src={howToTakeCare}
          alt="howToTakeCareImg"
        />
      </div>
    </div>
  );
};

export default HowToTakeCare;
