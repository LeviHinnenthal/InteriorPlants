import React from "react";
import CartImg from "../../assets/cart.png";
import cartNumber from "../../assets/cartNumber.png";
const Cart = () => {
    
  return (
    <a href="/cart" className="flex cursor">
      <img className="w-[24px]" src={CartImg} alt="Cart Image" />
      <div className="number -ml-1 -mt-4 flex justify-center items-center">
        <img className="w-[17px] absolute z-0" src={cartNumber} alt="Cart" />
        <p className="z-10 text-sm">
            0
        </p>
      </div>
    </a>
  );
};

export default Cart;
