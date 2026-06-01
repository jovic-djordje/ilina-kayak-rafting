import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import "./home.style.css";
import ServiceSection from "./ServiceSection";
import WhySection from "./WhySection";
import Testimonials from "./Testimonials";
import GallerySection from "./GallerySection";
import FaqSection from "./FaqSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home = ({ t, language, toggleLanguage }) => {
  return (
    <>
      <Navigation t={t} language={language} toggleLanguage={toggleLanguage} />
      <HeroSection t={t} />
      <ServiceSection t={t} />
      <WhySection t={t} />
      <Testimonials t={t} />
      <GallerySection t={t} />
      <FaqSection t={t} />
      <ContactSection t={t} />
      <Footer t={t} />
    </>
  );
};

export default Home;
