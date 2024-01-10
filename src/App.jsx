import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage/NoPage.jsx";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddProducts from "./pages/AddProducts.jsx";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Work Sans"],
      },
    });
  }, []);

  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />            <Route path="*" element={<NoPage />} />
            <Route path="/add-products" element={<AddProducts />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </NextUIProvider>
    </>
  );
}

export default App;
