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
import Cart from "./pages/Cart"

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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
