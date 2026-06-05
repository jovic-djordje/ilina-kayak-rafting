import { GoArrowUpRight } from "react-icons/go";
import { Hero, HeroMobile } from "../assets/images";

const HeroSection = ({ t }) => {
  return (
    <section className="hero">
      <div className="hero-section-holder">
        <div className="hero-section-text-holder">
          <h1 className="hero-title" data-aos="fade-up" data-aos-duration="700">
            {t.hero.title}
          </h1>

          <p
            className="hero-text"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            {t.hero.text}
          </p>

          <a
            href="#contact"
            className="hero-btn"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            <span className="hero-btn-text">{t.hero.btn}</span>
            <div className="btn-icon-holder">
              <GoArrowUpRight className="btn-icon" />
            </div>
          </a>
        </div>

        <Hero
          className="hero-img"
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="900"
        />

        <HeroMobile
          className="hero-mobile-img"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="900"
        />
      </div>
    </section>
  );
};

export default HeroSection;
