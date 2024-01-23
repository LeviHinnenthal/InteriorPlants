import shadow from "../../assets/shadow.png";
import add from "../../assets/plus.svg";
import { useState } from "react";
import Popup from "./Popup";


const Products = ({ product }) => {
  const productImage = product.attributes.Image.data[0].attributes.url;
  const productAttributes = product.attributes;
  const productCategory = product.attributes.category.data.attributes.Name;
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowPopup(true)}
        className="productContainer cursor-pointer"
      >
        <div className="mt-16  bg-neutral-100 flex flex-col justify-between aspect-square rounded-[30px]">
          <div className="imageContain flex flex-col items-center">
            <img
              src={`https://interiorplantsadmin.onrender.com${productImage}`}
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

        <div className="bg-white shadow-md rounded-[30px] flex flex-col justify-between w-full bottom-0 p-6 -mt-16 md:-mt-10">
          <div className="up flex flex-col items-start">
            <p className="text-lg">{productAttributes.Name}</p>
          </div>
          <div className="bottom flex justify-between items-center">
            <p className="font-bold">${productAttributes.Price}</p>
            <img
              className="w-8 hover:rotate-180 duration-200"
              src={add}
              alt="Add"
            />
          </div>
        </div>
      </div>

      <Popup showPopup={showPopup} setShowPopup={setShowPopup} product={product} />
    </>
  );
};

export default Products;
