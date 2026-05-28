import { GoArrowUpRight } from "react-icons/go";
import { Hero } from "../assets/images";

const HeroSection = ({ t }) => {
  return (
    <section className="hero">
      <div className="hero-section-holder">
        <div className="hero-section-text-holder">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-text">{t.hero.text}</p>
          <button className="hero-btn">
            <span className="hero-btn-text">{t.hero.btn}</span>
            <div className="btn-icon-holder">
              <GoArrowUpRight className="btn-icon" />
            </div>
          </button>
        </div>
        <Hero className="hero-img" />
      </div>
    </section>
  );
};

export default HeroSection;
