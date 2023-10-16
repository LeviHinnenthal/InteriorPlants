import React from "react";
import { products } from "../../data";
import stars from "../../assets/stars.svg";
import add from "../../assets/plus.svg";

import shadow from "../../assets/shadow.png";
const BestSellerProducts = () => {
  return (
    <div className="right mb-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%]">
      {products.map((product, i) => (
        <div
          key={i}
          className="productContainer my-16 cursor-pointer bg-neutral-100 hover:shadow-lg hover:scale-105 transition-all shadow-md flex flex-col justify-between rounded-[30px]  h-[350px]"
        >
          <div className="imageContain flex flex-col items-center">
            <img
              src={product.img}
              alt="Product Image"
              className="productImage transition-all  -mt-[80px] z-10"
            />
            <img
              src={shadow}
              alt="Shadow"
              className="productShadow transition-all -mt-[20px]"
            />
          </div>
          <div className="bg-white rounded-[30px] h-[150px] flex flex-col justify-between w-full bottom-0 p-6">
            <div className="up flex flex-col items-start">
              <p className="text-[20px] font-bold">{product.title}</p>
              <img src={stars} alt="Stars" className="h-6 -ml-1" />
            </div>
            <div className="bottom flex justify-between items-center">
              <p className="font-bold">{product.price}</p>
              <img className="w-8" src={add} alt="Add" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellerProducts;
