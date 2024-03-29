import { useState, useEffect } from "react";
import {useCartStore} from "../../Cart/CartStore";
import { getDoc } from "firebase/firestore";

const Popup = ({ showPopup, setShowPopup, product, category }) => {

  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const [categoryName, setCategoryName] = useState("");

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };

   const handleAddToCart = () => {
    addToCart(product, quantity);
    // Aquí podrías cerrar el popup o realizar otras acciones después de agregar al carrito
    setShowPopup(false);
  };

  useEffect(() => {
    const fetchCategoryName = async () => {
      try {
        const categoryRef = product.category;
        const categoryDoc = await getDoc(categoryRef);

        if (categoryDoc.exists()) {
          const categoryName = categoryDoc.data().name;
          setCategoryName(categoryName);
        } else {
          console.error("No se encontró el documento de la categoría");
        }
      } catch (error) {
        console.error("Error al obtener el nombre de la categoría:", error);
      }
    };

    fetchCategoryName();
  }, [product.category]);

  
  return (
    <div
      className={`${
        showPopup ? "show" : "hidden"
      }  fixed top-0 left-0 w-screen h-screen z-20`}
    >
      <div className="bg-white/30 overflow-auto items-center max-w-[1100px] md:overflow-visible backdrop-blur-[40px] rounded-3xl p-10 md:p-20 w-[95%] md:w-3/4 h-[90%] md:h-3/4 mx-auto mt-[10%]  flex flex-col md:flex-row">
        <div
          onClick={() => setShowPopup(false)}
          className="absolute cursor-pointer right-6 top-6 md:right-10 md:top-10"
        >
          X
        </div>
        <div className="md:w-2/4 flex h-[80%] items justify-center">
          <img
            className=" hover:scale-150 transition-all"
            src={product.img}
            alt=""
          />
        </div>
        <div className="md:w-2/4 flex flex-col text-black mt-10 md:mt-0 md:text-lg h-full justify-between items-start">
          <div className="mb-2 md:mb-0 text-lg">{product.title}</div>

          <div className="mb-4 md:mb-0">{categoryName}</div>
          <div className="text-left mb-8 md:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="w-full flex flex-wrap">
            <div className="quantityButton flex justify-center rounded-xl py-[12px] w-full md:w-2/4 border-primary-100 border-1">
              <p className="mr-4">Quantity</p>
              <div className="quantityItem flex gap-4">
                <span
                  onClick={() => decrement()}
                  className="minus cursor-pointer"
                >
                  -
                </span>
                <span>{quantity}</span>{" "}
                <span
                  onClick={() => increment()}
                  className="plus cursor-pointer"
                >
                  +
                </span>
              </div>
            </div>
            <p className="hidden md:w-[47%] cursor-pointer md:flex items-center justify-center ml-[3%] border-primary-100 border-1 rounded-xl">
              Add to fav
            </p>
            <button onClick={() => handleAddToCart()} className="bg-primary-100 cursor-pointer my-4 flex justify-center border-1 border-primary-100 text-white py-4 w-full rounded-xl transition-all hover:bg-transparent hover:text-black">
              Add to cart{" "}
              <p className="ml-4">(${product.price * quantity})</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
