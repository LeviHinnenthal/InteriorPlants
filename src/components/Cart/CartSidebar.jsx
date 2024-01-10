import React, { useState } from "react";

const CartSidebar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div
      onClick={() => setCartOpen(true)}
      className={`absolute bg-primary-100 transition h-screen w-[20%] ${
        cartOpen == true ? "right-0" : "-right-100"
      }`}
    >
      Hey
    </div>
  );
};

export default CartSidebar;
