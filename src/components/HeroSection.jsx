import { GoArrowUpRight } from "react-icons/go";
import { Hero } from "../assets/images";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-section-holder">
        <div className="hero-section-text-holder">
          <h1 className="hero-title">Doživi Vrbas na pravi način</h1>
          <p className="hero-text">
            Rafting, kajak i avanture koje spajaju adrenalin, prirodu i
            sigurnost. Sa iskusnim vodičima i profesionalnom opremom, Ilina
            Kayak Rafting pretvara svaki izlazak na vodu u iskustvo koje se
            pamti.
          </p>
          <button className="hero-btn">
            Rezerviši svoju avanturu
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
