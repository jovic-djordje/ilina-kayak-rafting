import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import { translations } from "./data/translation";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [language, setLanguage] = useState("sr");

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "sr" ? "en" : "sr");
  };

  const t = translations[language];

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home t={t} language={language} toggleLanguage={toggleLanguage} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
