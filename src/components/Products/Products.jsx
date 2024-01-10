import React from "react";
import shadow from "../../assets/shadow.png";
import { motion } from "framer-motion";
import add from "../../assets/plus.svg";

const Products = ({ product }) => {
  return (
    <motion.div layout className="productContainer cursor-pointer">
      <div
        className="mt-16  bg-neutral-100 flex flex-col justify-between aspect-square rounded-[30px]"
        // data-aos="fade-up"
        // data-aos-offset="40"
      >
        <div className="imageContain flex flex-col items-center">
          <img
            src={product.img}
            alt="Product Image"
            className="productImage transition-all w-[85%]  -mt-[60px] z-10"
          />
          <img
            src={shadow}
            alt="Shadow"
            className="productShadow transition-all -mt-[20px]"
          />
        </div>
      </div>
      {/* <div className="infoContainer">
      <h2 className="uppercase font-bold mt-2">{product.title}</h2>
      <p>${product.price}</p>
    </div> */}
      <div className="bg-white shadow-md rounded-[30px] flex flex-col justify-between w-full bottom-0 p-6 -mt-10">
        <div className="up flex flex-col items-start">
          <p className="text-lg">{product.title}</p>
        </div>
        <div className="bottom flex justify-between items-center">
          <p className="font-bold">${product.price}</p>
          <img
            className="w-8 hover:rotate-180 duration-200"
            src={add}
            alt="Add"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
