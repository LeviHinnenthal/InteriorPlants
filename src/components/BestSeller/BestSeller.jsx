import React from "react";
import BestSellerProducts from "./BestSellerProducts";
import arrowRight from "../../assets/arrowRight.svg";

const BestSeller = () => {
 

  return (
    <div className="flex flex-col md:flex-row mx-auto items-center max-w-[900px] md:my-[70px]">
      <div className="left  md:w-[230px] flex flex-col group">
        <p className="font-bold text-4xl text-left">
          Best Seller <br /> Product
        </p>
        <div className="flex items-center cursor-pointer">
          <p>See all colection</p>
          <img src={arrowRight} alt="Rating" className="w-6 my-4" />
        </div>
      </div>
      <BestSellerProducts />
    </div>
  );
};

export default BestSeller;
