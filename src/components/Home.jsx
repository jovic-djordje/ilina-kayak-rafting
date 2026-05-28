import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import "./home.style.css";
import ServiceSection from "./ServiceSection";

const Home = ({ t, language, toggleLanguage }) => {
  return (
    <>
      <Navigation t={t} language={language} toggleLanguage={toggleLanguage} />
      <HeroSection t={t} />
      <ServiceSection t={t} />
    </>
  );
};

export default Home;
