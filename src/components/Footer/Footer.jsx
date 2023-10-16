import React from "react";
import Newsletter from "./Newsletter";
import Columns from "./Columns";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#566270] to-[#283444] py-20">
      <div className="border-b-2 pb-10 border-white w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center">
        <Newsletter />
        <Columns />
      </div>
      <div className="w-[90%] mx-auto text-white py-10">
        <p>© 2022 Daunku - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
