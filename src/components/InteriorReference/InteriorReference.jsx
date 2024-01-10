import React, { useEffect } from "react";
import item1 from "../../assets/item1.jpg";
import item2 from "../../assets/item2.jpg";
import item3 from "../../assets/item3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const InteriorReference = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="interiorReference flex flex-col items-center">
      <p className="text-4xl font-bold" data-aos="fade-down"  >Interior Plant Reference</p>
      <p className="text-md mt-4 mb-6" data-aos="fade-down" >
        make your home so comfortable with refreshing plants
      </p>
      <div className="images grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-20 md:h-[84vh]">
        <div data-aos="fade-right"  data-aos-offset="30" className="interiorItem relative">
          <img
            src={item1}
            alt="Interior"
            className="w-full rounded-[30px] h-[40vh] object-cover hover:brightness-50 transition-all cursor-pointer"
          />
          <p className="interiorItemP top-2/4 translate-y-[-50%] pointer-events-none">living room</p>
        </div>
        <div data-aos="fade-left"  data-aos-offset="100" className="interiorItem row-span-2 object-cover relative">
          <img
            src={item2}
            alt="Interior"
            className="w-full rounded-[30px] h-[40vh] md:h-[84vh] object-cover hover:brightness-50 transition-all cursor-pointer"
          />
          <p className="interiorItemP top-2/4 translate-y-[-50%] pointer-events-none">office</p>
        </div>
        <div data-aos="fade-right"  data-aos-offset="150" className="interiorItem relative">
          <img
            src={item3}
            alt="Interior"
            className="w-full rounded-[30px] h-[40vh] object-cover hover:brightness-50 transition-all cursor-pointer"
          />
          <p className="interiorItemP absolute top-2/4 translate-y-[-50%] pointer-events-none">room</p>
        </div>
      </div>
    </div>
  );
};

export default InteriorReference;
