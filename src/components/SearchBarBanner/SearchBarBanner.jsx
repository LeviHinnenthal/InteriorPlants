import React from "react";
import SearchButton from "../../assets/searchButton.png";
const SearchBarBanner = () => {
  return (
    <div className="flex w-[80%] md:w-[400px] h-[50px] bg-white/40 z-10 mt-8 rounded-[100px] border-2 border-white items-center">
      <input type="text" placeholder="Search plant..." className="focus:outline-none w-[90%] bg-transparent text-white placeholder-white pl-4" />
      <img src={SearchButton} alt="Search Button" className="pr-[6px] h-[35px] cursor-pointer"/>
    </div>
  );
};

export default SearchBarBanner;
