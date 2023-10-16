import { React, useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import Cart from "../Cart/Cart";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar flex items-center h-[50px] md:h-[70px] sticky w-full top-0 b-1 z-20 py-4 px-6 ${
          location.pathname != "/" ? "bg-primary-100" : ""
        } ${scrolled ? "bg-primary-100" : ""} desktopElement`}
      >
        <div className="headerItemsContainer flex items-center w-full justify-between text-white ">
          <Link to="/">
            <img className="h-8" src={Logo} alt="LogoInteriorPlants" />
          </Link>

          <div className="headerOptions flex absolute left-2/4 -translate-x-2/4">
            <NavLink to="/" className="mx-2">
              Home
            </NavLink>
            <NavLink to="/shop" className="mx-2">
              Shop
            </NavLink>
            <NavLink to="about" className="mx-2">
              About Us
            </NavLink>
            <NavLink to="contact" className="mx-2">
              Contact
            </NavLink>
          </div>

          <Cart />
        </div>
      </div>

      <div
        className={`navbar flex items-center h-[50px] md:h-[70px] sticky top-0 b-1 z-20 py-4 px-4 ${
          location.pathname != "/" ? "bg-primary-100" : ""
        } ${scrolled ? "bg-primary-100" : ""} mobileElement z-20`}
      >
        <div className="headerItemsContainer z-20 flex items-center w-full justify-between text-white ">
          <Link to="/">
            <img className="h-8" src={Logo} alt="LogoInteriorPlants" />
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden transition-all z-20"
        >
          {isOpen ? (
            <RiCloseFill className="text-white text-3xl cursor-pointer" />
          ) : (
            <RiMenu4Fill className="text-white text-3xl cursor-pointer" />
          )}
        </div>

        <div
          className={`mobileElement py-20 px-10 justify-center flex flex-col text-white absolute left-0 transition-all w-full z-10 h-[400px] bg-primary-100 rounded-2xl ${
            isOpen ? "top-0" : "-top-[400px]"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <NavLink to="/" className="mx-2 text-2xl my-2">
            Home
          </NavLink>
          <NavLink to="/shop" className="mx-2 text-2xl my-2">
            Shop
          </NavLink>
          <NavLink to="/about" className="mx-2 text-2xl my-2">
            About Us
          </NavLink>
          <NavLink to="/contact" className="mx-2 text-2xl my-2">
            Contact
          </NavLink>
          <NavLink to="/cart" className="mx-2 text-2xl my-2 flex justify-center">
            <p className="mr-4">Cart</p>
            <Cart />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
