import { React, useState, useEffect } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Products from "../components/Products/Products";
import Filter from "../components/Filters/Filter";
import { Input } from "@nextui-org/react";
import SearchButton from "../assets/searchButton.png";
import SearchBarBanner from "../components/SearchBarBanner/SearchBarBanner";
import { useLocation, useParams } from "react-router-dom";
import { getProducts } from "../api/api";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const { category } = useParams(); // Agrega esta línea para obtener el parámetro de la URL
  const location = useLocation(); // Necesitas usar useLocation para detectar cambios en la URL

  const handleInputChange = (event) => {
    const newSearch = event.target.value;

    const filteredItems = allProducts.filter((product) =>
      product.title.toLowerCase().includes(newSearch.toLowerCase())
    );

    setProducts(filteredItems);

    console.log(newSearch);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts();

        // Filtra por categoría si hay una en la URL
        const filteredProducts = category
          ? productsData.filter((product) => product.category === category)
          : productsData;

        setProducts(filteredProducts);
        setAllProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [location.pathname]); // Asegúrate de incluir location.pathname en las dependencias

  return (
    <>
      <div className="flex flex-wrap overflow-hidden mb-10">
        <div className="topSection w-full font-bold text-2xl mt-6 md:mt-10 md:mb-4">
          Our products
        </div>
        <div className="flex items-center justify-between w-[80%] md:w-[40%] mx-[10%] md:mx-[30%] h-[50px] bg-transparent z-10 my-6 md:my-8 rounded-[100px] border-2 border-black">
          <input
            type="text"
            placeholder="Search plant..."
            className="focus:outline-none w-[90%] md:w-[50%] bg-transparent text-black placeholder-black pl-4"
            onChange={handleInputChange}
          />
          <img
            src={SearchButton}
            alt="Search Button"
            className="pr-[6px] h-[35px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col md:flex-row mx-auto w-[90%] md:w-[95%]">
          <div className="md:mt-16 w-full md:w-[20%] box-border p-6 md:ml-[2.5%] shadow-xl rounded-[30px] h-fit bg-primary-100 text-white md:min-h-[200px]">
            <Filter />
          </div>
          <div
            // data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-4 gap-6 min-w-[75%]  md:w-[95%] md:ml-[2.5%] mb-20"
          >
            {products.length >= 1 ? (
              products.map((product, i) => (
                <Products key={i} product={product} />
              ))
            ) : (
              <div className="noProducts col-span-3 mt-16">
                0 results. Search for another plant.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
