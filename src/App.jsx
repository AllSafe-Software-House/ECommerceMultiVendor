import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Navbar from "./components/navbar";
import AppRoutes from "./routes";
import Footer from "./components/footer";
import PopUp from "./components/popup";

function App() {
  const { i18n } = useTranslation();
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const currentLanguage = i18n.language;
    const direction = i18n.dir(currentLanguage);
    document.body.setAttribute("dir", direction);
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [i18n.language, i18n]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      {showPopUp && <PopUp />}
      <Navbar />
      <div className="h-[65px] block"></div>
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
