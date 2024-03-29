import { currentCart } from "../../Cart/CartStore";
import { useCartStore } from "../../Cart/CartStore";

const CartPurchase = () => {
  console.log(currentCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  return (
    <div>
      {currentCart.map((cartItem, index) => (
        <div className="flex justify-between items-center group bg-white/40 backdrop-blur-20 rounded-xl w-[80%] my-4 mx-auto p-4" key={index}>
          <div className="flex flex-col">
            <p className="font-bold text-left">{cartItem.product.title}</p>
            <p className="text-left">Price: ${cartItem.product.price}</p>
            <p className="text-left">Quantity: {cartItem.quantity}</p>
          </div>
          <img
          className="w-20 group-hover:scale-150 transition-all"
            src={cartItem.product.img}
            alt=""
          />
          <p onClick={() => handleRemoveFromCart(cartItem.product)} className="delte cursor-pointer">X</p>
        </div>
      ))}
    </div>
  );
};

export default CartPurchase;
