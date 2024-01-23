import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useProducts } from "../../api/useProducts";
import Products from "../Products/Products";

const BestSellerProducts = () => {
  const { products } = useProducts();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="right mb-4 grid grid-cols-1 md:grid-cols-3 gap-6 w-[80%]">
      {products.slice(0, 3).map((product, i) => (
        <Products key={i} product={product} />
      ))}
    </div>
  );
};

export default BestSellerProducts;
