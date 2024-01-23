import { useEffect } from "react";
import CartImg from "../../assets/cart.png";
import cartNumber from "../../assets/cartNumber.png";
import { useState } from "react";
import { useCartStore } from "../../Cart/CartStore";
import CartPurchase from "../CartPurchase/CartPurchase";
import { currentCart } from "../../Cart/CartStore";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  // const clearCart = useCartStore((state) => state.clearCart());

  // const handleClearCart = () => {
  //   clearCart();
  // };

  useEffect(() => {
    // Suscribirse a cambios en el carrito
    const unsubscribe = useCartStore.subscribe((state) => {
      setCartCount(
        state.cart.reduce((total, item) => total + item.quantity, 0)
      );
    });

    // Limpiar la suscripción al desmontar el componente
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div onClick={() => setCartOpen(!cartOpen)} className="flex cursor z-10">
        <img className="w-[24px]" src={CartImg} alt="Cart Image" />
        <div className="number -ml-1 -mt-4 flex justify-center items-center">
          <img className="w-[17px] absolute z-0" src={cartNumber} alt="Cart" />
          <p className="z-10 text-sm">{cartCount}</p>
        </div>
      </div>

      <div
        className={`bg-primary-100 -right-[350px] transition-all h-[100vh] top-0 fixed w-[350px] pt-14 rounded-xl ${
          cartOpen ? "right-[1px]" : "-right-[350px]"
        }`}
      >
        <div className="cartContent flex flex-col justify-between">
          <div>
            <CartPurchase />
          </div>
          <div
            className={`button bg-white mt-6 rounded-lg w-[60%] mx-auto text-black py-2 ${
              cartCount == 0 ? "cursor-unset" : "cursor-pointer"
            }`}
          >
            {cartCount == 0 ? "Your cart is empty" : "Pay"}
          </div>
          <div
            // onClick={() => handleClearCart()}
            className="mt-2 cursor-pointer border-1 py-2 rounded-lg w-[60%] mx-auto"
          >
            Clear cart
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
