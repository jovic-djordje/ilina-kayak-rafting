import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
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
      disable: () => window.innerWidth < 768,
    });

    AOS.refresh();
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "sr" ? "en" : "sr"));
  };

  const t = translations[language];

  return <Home t={t} language={language} toggleLanguage={toggleLanguage} />;
}

export default App;
