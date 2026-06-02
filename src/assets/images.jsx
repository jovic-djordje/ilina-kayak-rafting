import logo from "./logoilina.png";
import hero from "./hero.webp";
import why from "./why-choose-us.webp";
import whyMobile from "./why-choose-us-mobile.webp";
import testOne from "./testOne.webp";
import testTwo from "./testTwo.webp";
import testThree from "./testThree.webp";
import testFour from "./testFour.webp";
import galleryOne from "./gallery-one.webp";
import galleryTwo from "./gallery-two.webp";
import galleryThree from "./gallery-three.webp";
import galleryFour from "./gallery-four.webp";
import galleryFive from "./gallery-five.webp";
import gallerySix from "./gallery-six.webp";
import gallerySeven from "./gallery-seven.webp";
import galleryEight from "./gallery-eight.webp";
import galleryNine from "./gallery-nine.webp";
import galleryTen from "./gallery-ten.webp";
import devLogo from "./logo2.webp";

const Logo = ({ className }) => {
  return <img src={logo} alt="Logo" className={className} />;
};

const Hero = ({ className }) => {
  return (
    <img
      src={hero}
      alt="Rafting i kajak avantura na rijeci Vrbas u Banjoj Luci"
      className={className}
    />
  );
};

const Why = ({ className }) => {
  return (
    <img
      src={why}
      alt="Iskusni vodiči i sigurna organizacija avantura na Vrbasu"
      className={className}
    />
  );
};

const WhyMobile = ({ className }) => {
  return (
    <img
      src={whyMobile}
      alt="Iskusni vodiči i sigurna organizacija avantura na Vrbasu"
      className={className}
    />
  );
};

const TestOne = ({ className }) => {
  return <img src={testOne} alt="Zoran Trifunovic" className={className} />;
};

const TestTwo = ({ className }) => {
  return <img src={testTwo} alt="Martina" className={className} />;
};

const TestThree = ({ className }) => {
  return <img src={testThree} alt="Mamabezfejsbuka" className={className} />;
};

const TestFour = ({ className }) => {
  return <img src={testFour} alt="Isidora Ratkovic" className={className} />;
};

const GalleryOne = ({ className }) => {
  return (
    <img
      src={galleryOne}
      alt="Rafting kroz brže dijelove rijeke"
      className={className}
    />
  );
};

const GalleryTwo = ({ className }) => {
  return (
    <img
      src={galleryTwo}
      alt="Rafting čamci okupljeni tokom ture"
      className={className}
    />
  );
};

const GalleryThree = ({ className }) => {
  return (
    <img
      src={galleryThree}
      alt="Grupa gostiju nakon rafting avanture"
      className={className}
    />
  );
};

const GalleryFour = ({ className }) => {
  return (
    <img
      src={galleryFour}
      alt="Gost u zaštitnoj opremi na rijeci Vrbas"
      className={className}
    />
  );
};

const GalleryFive = ({ className }) => {
  return (
    <img
      src={galleryFive}
      alt="Rafting grupa na mirnijem dijelu Vrbasa"
      className={className}
    />
  );
};

const GallerySix = ({ className }) => {
  return (
    <img
      src={gallerySix}
      alt="Kajakaš u akciji na vodi"
      className={className}
    />
  );
};

const GallerySeven = ({ className }) => {
  return (
    <img
      src={gallerySeven}
      alt="Porodica uživa u vožnji čamcem"
      className={className}
    />
  );
};

const GalleryEight = ({ className }) => {
  return (
    <img
      src={galleryEight}
      alt="Ekipa u čamcu tokom rafting ture"
      className={className}
    />
  );
};

const GalleryNine = ({ className }) => {
  return (
    <img
      src={galleryNine}
      alt="Gosti se opuštaju i uživaju u rafting iskustvu"
      className={className}
    />
  );
};

const GalleryTen = ({ className }) => {
  return (
    <img
      src={galleryTen}
      alt="Gost nakon avanture na Vrbasu"
      className={className}
    />
  );
};

const DevLogo = ({ className }) => {
  return <img src={devLogo} alt="" className={className} />;
};

export {
  Logo,
  Hero,
  Why,
  WhyMobile,
  TestOne,
  TestTwo,
  TestThree,
  TestFour,
  GalleryOne,
  GalleryTwo,
  GalleryThree,
  GalleryFour,
  GalleryFive,
  GallerySix,
  GallerySeven,
  GalleryEight,
  GalleryNine,
  GalleryTen,
  DevLogo,
};
