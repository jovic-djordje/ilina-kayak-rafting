import logo from "./logoilina.png";
import hero from "./hero.webp";
import heroMobile from "./hero-mobile.webp";
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

const Logo = ({ className, ...props }) => {
  return <img src={logo} alt="Logo" className={className} {...props} />;
};

const Hero = ({ className, ...props }) => {
  return (
    <img
      src={hero}
      alt="Rafting i kajak avantura na rijeci Vrbas u Banjoj Luci"
      className={className}
      {...props}
    />
  );
};

const HeroMobile = ({ className, ...props }) => {
  return (
    <img
      src={heroMobile}
      alt="Rafting i kajak avantura na rijeci Vrbas u Banjoj Luci"
      className={className}
      {...props}
    />
  );
};

const Why = ({ className, ...props }) => {
  return (
    <img
      src={why}
      alt="Iskusni vodiči i sigurna organizacija avantura na Vrbasu"
      className={className}
      {...props}
    />
  );
};

const WhyMobile = ({ className, ...props }) => {
  return (
    <img
      src={whyMobile}
      alt="Iskusni vodiči i sigurna organizacija avantura na Vrbasu"
      className={className}
      {...props}
    />
  );
};

const TestOne = ({ className, ...props }) => {
  return (
    <img
      src={testOne}
      alt="Zoran Trifunovic"
      className={className}
      {...props}
    />
  );
};

const TestTwo = ({ className, ...props }) => {
  return <img src={testTwo} alt="Martina" className={className} {...props} />;
};

const TestThree = ({ className, ...props }) => {
  return (
    <img
      src={testThree}
      alt="Mamabezfejsbuka"
      className={className}
      {...props}
    />
  );
};

const TestFour = ({ className, ...props }) => {
  return (
    <img
      src={testFour}
      alt="Isidora Ratkovic"
      className={className}
      {...props}
    />
  );
};

const GalleryOne = ({ className, ...props }) => {
  return (
    <img
      src={galleryOne}
      alt="Rafting kroz brže dijelove rijeke"
      className={className}
      {...props}
    />
  );
};

const GalleryTwo = ({ className, ...props }) => {
  return (
    <img
      src={galleryTwo}
      alt="Rafting čamci okupljeni tokom ture"
      className={className}
      {...props}
    />
  );
};

const GalleryThree = ({ className, ...props }) => {
  return (
    <img
      src={galleryThree}
      alt="Grupa gostiju nakon rafting avanture"
      className={className}
      {...props}
    />
  );
};

const GalleryFour = ({ className, ...props }) => {
  return (
    <img
      src={galleryFour}
      alt="Gost u zaštitnoj opremi na rijeci Vrbas"
      className={className}
      {...props}
    />
  );
};

const GalleryFive = ({ className, ...props }) => {
  return (
    <img
      src={galleryFive}
      alt="Rafting grupa na mirnijem dijelu Vrbasa"
      className={className}
      {...props}
    />
  );
};

const GallerySix = ({ className, ...props }) => {
  return (
    <img
      src={gallerySix}
      alt="Kajakaš u akciji na vodi"
      className={className}
      {...props}
    />
  );
};

const GallerySeven = ({ className, ...props }) => {
  return (
    <img
      src={gallerySeven}
      alt="Porodica uživa u vožnji čamcem"
      className={className}
      {...props}
    />
  );
};

const GalleryEight = ({ className, ...props }) => {
  return (
    <img
      src={galleryEight}
      alt="Ekipa u čamcu tokom rafting ture"
      className={className}
      {...props}
    />
  );
};

const GalleryNine = ({ className, ...props }) => {
  return (
    <img
      src={galleryNine}
      alt="Gosti se opuštaju i uživaju u rafting iskustvu"
      className={className}
      {...props}
    />
  );
};

const GalleryTen = ({ className, ...props }) => {
  return (
    <img
      src={galleryTen}
      alt="Gost nakon avanture na Vrbasu"
      className={className}
      {...props}
    />
  );
};

const DevLogo = ({ className }) => {
  return <img src={devLogo} alt="" className={className} />;
};

export {
  Logo,
  Hero,
  HeroMobile,
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
