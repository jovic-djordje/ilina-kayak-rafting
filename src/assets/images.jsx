import logo from "./logoilina.png";
import hero from "./hero.webp";
import why from "./why-choose-us.webp";
import whyMobile from "./why-choose-us-mobile.webp";

const Logo = ({ className }) => {
  return <img src={logo} alt="Logo" className={className} />;
};

const Hero = ({ className }) => {
  return <img src={hero} alt="" className={className} />;
};

const Why = ({ className }) => {
  return <img src={why} alt="" className={className} />;
};

const WhyMobile = ({ className }) => {
  return <img src={whyMobile} alt="" className={className} />;
};

export { Logo, Hero, Why, WhyMobile };
