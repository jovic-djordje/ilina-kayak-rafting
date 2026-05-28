import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { useState } from "react";
import { translations } from "./data/translation";

function App() {
  const [language, setLanguage] = useState("sr");

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
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
