import { React, useEffect, useState } from "react";
import axios from "axios";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const applyFilters = () => {
    let filteredProducts = [...products];

    // Aplicar filtro por término de búsqueda
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.attributes.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Aplicar filtro por categoría
    if (categoryFilter) {
      filteredProducts = filteredProducts.filter(
        (product) => product.attributes.category.data.attributes.Name.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

   
    return filteredProducts;
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await axios.get("http://localhost:1337/api/categories");
      setCategories(data);
    
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await axios.get("http://localhost:1337/api/products?populate=*");
      setProducts(data);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return {
    categories,
    products: applyFilters(),
    setSearchTerm,
    setCategoryFilter,
    loading,
  };
};
