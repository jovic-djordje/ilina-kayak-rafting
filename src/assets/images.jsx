import logo from "./logoilina.png";
import hero from "./hero.webp";

const Logo = ({ className }) => {
  return <img src={logo} alt="Logo" className={className} />;
};

const Hero = ({ className }) => {
  return <img src={Hero} alt="" className={className} />;
};

export { Logo, Hero };
