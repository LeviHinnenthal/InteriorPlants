import {React, useState} from "react";
import SearchButton from "../../assets/searchButton.png";
import { useNavigate } from "react-router-dom";

const SearchBarBanner = () => {
  const navigateTo = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Realizar la acción deseada al presionar "Enter"
      // Por ejemplo, navegar a /shop y realizar la búsqueda
      navigateTo('/shop')

      // Aquí puedes realizar la lógica de búsqueda con el valor de searchValue
      console.log("Realizar búsqueda con:", searchValue);
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="flex w-[80%] md:w-[400px] h-[50px] bg-white/40 z-10 mt-8 rounded-[100px] border-2 border-white items-center">
      <input onChange={handleInputChange} onKeyPress={handleKeyPress} type="text" placeholder="Search plant..." className="focus:outline-none w-[90%] bg-transparent text-white placeholder-white pl-4" />
      <img src={SearchButton} alt="Search Button" className="pr-[6px] h-[35px] cursor-pointer"/>
    </div>
  );
};

export default SearchBarBanner;
