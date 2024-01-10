import React from "react";
import CartImg from "../../assets/cart.png";
import cartNumber from "../../assets/cartNumber.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <>
      <div onClick={() => setCartOpen(!cartOpen)} className="flex cursor z-10">
        <img className="w-[24px]" src={CartImg} alt="Cart Image" />
        <div className="number -ml-1 -mt-4 flex justify-center items-center">
          <img className="w-[17px] absolute z-0" src={cartNumber} alt="Cart" />
          <p className="z-10 text-sm">0</p>
        </div>
      </div>

      <div
        className={`bg-primary-100 -right-[350px] transition-all h-[100vh] top-0 fixed w-[350px] pt-14 rounded-xl ${
          cartOpen ? "right-[1px]" : "-right-[350px]"
        }`}
      >
        <div className="cartContent flex flex-col justify-between">
          <p>This is your cart</p>
          <div
            className={`button bg-white mt-6 rounded-lg w-[60%] mx-auto text-black py-2 ${
              isEmpty ? "cursor-unset" : "cursor-pointer"
            }`}
          >
            {isEmpty ? "Your cart is empty" : "Purchase"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
