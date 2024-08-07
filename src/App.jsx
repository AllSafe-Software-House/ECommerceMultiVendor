import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Navbar from "./components/navbar";
import AppRoutes from "./routes";
import Footer from "./components/footer";
import NewsLetter from "./components/newsLetter";
import CartPage from "./components/cart";
import MegaMenu from "./components/mega-menu";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const currentLanguage = i18n.language;
    const direction = i18n.dir(currentLanguage);
    document.body.setAttribute("dir", direction);
  }, [i18n.language, i18n]);
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      {/* <div className="container">
        <CartPage />
      </div> */}
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
