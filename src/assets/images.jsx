import logo from "./logoilina.png";
import hero from "./hero.webp";
import why from "./why-choose-us.webp";
import whyMobile from "./why-choose-us-mobile.webp";
import testOne from "./testOne.webp";
import testTwo from "./testTwo.webp";
import testThree from "./testThree.webp";
import testFour from "./testFour.webp";

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

const TestOne = ({ className }) => {
  return <img src={testOne} alt="profile picture" className={className} />;
};

const TestTwo = ({ className }) => {
  return <img src={testTwo} alt="profile picture" className={className} />;
};

const TestThree = ({ className }) => {
  return <img src={testThree} alt="profile picture" className={className} />;
};

const TestFour = ({ className }) => {
  return <img src={testFour} alt="profile picture" className={className} />;
};

export { Logo, Hero, Why, WhyMobile, TestOne, TestTwo, TestThree, TestFour };
