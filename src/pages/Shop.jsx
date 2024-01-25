import { React, useState, useEffect } from "react";
import "aos/dist/aos.css";
import Products from "../components/Products/Products";
import Filter from "../components/Filters/Filter";
import SearchButton from "../assets/searchButton.png";
import { useParams } from "react-router-dom";
// import { getProducts } from "../api/api";
import { useProducts } from "../api/useProducts";
import AOS from "aos";

const Shop = () => {
  const { categories, products, setSearchTerm, setCategoryFilter, loading } = useProducts();
  const { category } = useParams(); // Agrega esta línea para obtener el parámetro de la URL

  console.log(category);

  useEffect(() => {
    setSearchTerm(""); // Limpiar el término de búsqueda al cambiar de categoría
    setCategoryFilter(category); // Aplicar filtro de categoría desde la URL
  }, [category, setSearchTerm, setCategoryFilter]);

  const filteredProductsByCategory = category
  ? products.filter((product) => {
      const categoryRef = product.category;

      // Verifica si la referencia de la categoría es válida
      if (categoryRef instanceof Object) {
        console.log("Category Reference is an Object");

        // Intenta imprimir la estructura de datos de la categoría
        console.log("Category Reference Data:", categoryRef.data());

        // Verifica si el nombre de la categoría existe en la estructura de datos
        const categoryName = categoryRef.data()?.Name;

        if (categoryName) {
          // Ajusta la comparación para ignorar mayúsculas y minúsculas
          return categoryName.toLowerCase() === category.toLowerCase();
        } else {
          console.error("Category Name not found in Category Reference Data");
        }
      } else {
        console.error("Category Reference is not an Object");
      }

      return false; // Si la referencia de la categoría no es válida, exclúyelo del filtro
    })
  : products;

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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchButton}
            alt="Search Button"
            className="pr-[6px] h-[35px] cursor-pointer"
          />
        </div>
        <div className="flex flex-col md:flex-row mx-auto w-[90%] md:w-[95%]">
          <div className="md:mt-16 w-full md:w-[20%] box-border p-6 md:ml-[2.5%] shadow-xl rounded-[30px] h-fit bg-primary-100 text-white md:min-h-[200px]">
            <Filter categories={categories} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-w-[75%]  md:w-[95%] md:ml-[2.5%] mb-20">
            {filteredProductsByCategory.length >= 1 ? (
              filteredProductsByCategory.map((product, i) => (
                <Products key={i} product={product}  />
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
