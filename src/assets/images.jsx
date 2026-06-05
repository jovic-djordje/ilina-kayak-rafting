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

const Logo = ({ className, ...props }) => (
  <img
    src={logo}
    alt="Ilina Kayak Rafting logo"
    className={className}
    decoding="async"
    {...props}
  />
);

const Hero = ({ className, ...props }) => (
  <img
    src={hero}
    alt="Rafting i kajak avantura na rijeci Vrbas u Banjoj Luci"
    className={className}
    width="600"
    height="550"
    loading="eager"
    fetchPriority="high"
    decoding="async"
    {...props}
  />
);

const HeroMobile = ({ className, ...props }) => (
  <img
    src={heroMobile}
    alt="Rafting i kajak avantura na rijeci Vrbas u Banjoj Luci"
    className={className}
    loading="eager"
    fetchPriority="high"
    decoding="async"
    {...props}
  />
);

const Why = ({ className, ...props }) => (
  <img
    src={why}
    alt="Iskusni vodiči i sigurna organizacija avantura na Vrbasu"
    className={className}
    width="400"
    height="600"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const WhyMobile = ({ className, ...props }) => (
  <img
    src={whyMobile}
    alt="Iskusni vodiči i sigurna organizacija avantura na Vrbasu"
    className={className}
    width="356"
    height="239"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const TestOne = ({ className, ...props }) => (
  <img
    src={testOne}
    alt="Zoran Trifunovic"
    className={className}
    width="45"
    height="45"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const TestTwo = ({ className, ...props }) => (
  <img
    src={testTwo}
    alt="Martina"
    className={className}
    width="45"
    height="45"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const TestThree = ({ className, ...props }) => (
  <img
    src={testThree}
    alt="Mamabezfejsbuka"
    className={className}
    width="45"
    height="45"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const TestFour = ({ className, ...props }) => (
  <img
    src={testFour}
    alt="Isidora Ratkovic"
    className={className}
    width="45"
    height="45"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const GalleryOne = ({ className, ...props }) => (
  <img
    src={galleryOne}
    alt="Rafting kroz brže dijelove rijeke"
    className={className}
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const GalleryTwo = ({ className, ...props }) => (
  <img
    src={galleryTwo}
    alt="Rafting čamci okupljeni tokom ture"
    className={className}
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const GalleryThree = ({ className, ...props }) => (
  <img
    src={galleryThree}
    alt="Grupa gostiju nakon rafting avanture"
    className={className}
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const GalleryFour = ({ className, ...props }) => (
  <img
    src={galleryFour}
    alt="Gost u zaštitnoj opremi na rijeci Vrbas"
    className={className}
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const GalleryFive = ({ className, ...props }) => (
  <img
    src={galleryFive}
    alt="Rafting grupa na mirnijem dijelu Vrbasa"
    className={className}
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const GallerySix = ({ className, ...props }) => (
  <img
    src={gallerySix}
    alt="Kajakaš u akciji na vodi"
    className={className}
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const GallerySeven = ({ className, ...props }) => (
  <img
    src={gallerySeven}
    alt="Porodica uživa u vožnji čamcem"
    className={className}
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const GalleryEight = ({ className, ...props }) => (
  <img
    src={galleryEight}
    alt="Ekipa u čamcu tokom rafting ture"
    className={className}
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const GalleryNine = ({ className, ...props }) => (
  <img
    src={galleryNine}
    alt="Gosti se opuštaju i uživaju u rafting iskustvu"
    className={className}
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const GalleryTen = ({ className, ...props }) => (
  <img
    src={galleryTen}
    alt="Gost nakon avanture na Vrbasu"
    className={className}
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    {...props}
  />
);

const DevLogo = ({ className, ...props }) => (
  <img
    src={devLogo}
    alt=""
    className={className}
    width="25"
    height="25"
    decoding="async"
    {...props}
  />
);

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
