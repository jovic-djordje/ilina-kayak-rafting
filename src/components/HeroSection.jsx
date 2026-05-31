import { GoArrowUpRight } from "react-icons/go";
import { Hero } from "../assets/images";

const HeroSection = ({ t }) => {
  return (
    <section className="hero" id="hero">
      <div className="hero-section-holder">
        <div className="hero-section-text-holder">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-text">{t.hero.text}</p>
          <a href="#contact" className="hero-btn">
            <span className="hero-btn-text">{t.hero.btn}</span>
            <div className="btn-icon-holder">
              <GoArrowUpRight className="btn-icon" />
            </div>
          </a>
        </div>
        <Hero className="hero-img" />
      </div>
    </section>
  );
};

export default HeroSection;
