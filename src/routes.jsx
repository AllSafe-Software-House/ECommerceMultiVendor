// routes.jsx
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blogs" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
