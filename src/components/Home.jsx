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
      <a href="#main-content" className="skip-link">
        Preskoči na sadržaj
      </a>

      <Navigation t={t} language={language} toggleLanguage={toggleLanguage} />

      <main id="main-content">
        <HeroSection t={t} />
        <ServiceSection t={t} />
        <WhySection t={t} />
        <Testimonials t={t} />
        <GallerySection t={t} />
        <FaqSection t={t} />
        <ContactSection t={t} />
      </main>

      <Footer t={t} />
    </>
  );
};

export default Home;
