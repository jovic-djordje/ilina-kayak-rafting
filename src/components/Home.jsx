import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import "./home.style.css";

const Home = ({ t, language, toggleLanguage }) => {
  return (
    <>
      <Navigation t={t} language={language} toggleLanguage={toggleLanguage} />
      <HeroSection t={t} />
    </>
  );
};

export default Home;
