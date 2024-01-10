import { React, useEffect } from "react";
import { services } from "../../data";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-[70%] md:w-[90%] items-start mx-auto flex flex-col md:flex-row justify-around relative py-10">
      {services.map((service, i) => (
 
        <div key={i} className="flex items-center my-2" data-aos="fade-up"  data-aos-offset={`${i * 130}`}>
          <div className="right">
            <img src={service.icon} alt="Service Icon" className="w-12" />
          </div>
          <div className="left flex flex-col items-start ml-4">
            <p className="text-md font-bold">{service.title}</p>
            <p className="font-light text-xs text-[#828282]">
              {service.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
