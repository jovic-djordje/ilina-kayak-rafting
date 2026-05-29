import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import "./home.style.css";
import ServiceSection from "./ServiceSection";
import WhySection from "./WhySection";
import Testimonials from "./Testimonials";

const Home = ({ t, language, toggleLanguage }) => {
  return (
    <>
      <Navigation t={t} language={language} toggleLanguage={toggleLanguage} />
      <HeroSection t={t} />
      <ServiceSection t={t} />
      <WhySection t={t} />
      <Testimonials t={t} />
    </>
  );
};

export default Home;
