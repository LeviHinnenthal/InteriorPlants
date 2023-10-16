import React from "react";
import subscribe from "../../assets/subscribe.png";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center md:items-start md:mr-12">
      <p className="text-white text-3xl">Newsletter</p>
      <div className="flex md:w-[400px] h-[50px] bg-white/40 z-10 my-4 rounded-[100px] border-2 border-white items-center">
        <input
          type="text"
          placeholder="Enter your mail"
          className="focus:outline-none w-[90%] bg-transparent text-white placeholder-white pl-4"
        />
        <img
          src={subscribe}
          alt="Search Button"
          className="pr-[6px] h-[35px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Newsletter;
