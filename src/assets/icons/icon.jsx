import menuIcon from "./icons8-menu.svg";
import serviceCartIcon from "./icons8-rafting-30.png";
import serviceCartIconTwo from "./icons8-kayaking-30.png";
import serviceCartIconThree from "./icons8-canoe-50.png";
import serviceCartIconFour from "./icons8-party-50.png";

const MenuIcon = ({ className }) => {
  return <img src={menuIcon} alt="Menu" className={className} />;
};

const ServiceCartIcon = ({ className }) => {
  return <img src={serviceCartIcon} alt="rafting icon" className={className} />;
};

const ServiceCartIconTwo = ({ className }) => {
  return (
    <img src={serviceCartIconTwo} alt="kayaking icon" className={className} />
  );
};

const ServiceCartIconThree = ({ className }) => {
  return (
    <img src={serviceCartIconThree} alt="canoe icon" className={className} />
  );
};

const ServiceCartIconFour = ({ className }) => {
  return (
    <img src={serviceCartIconFour} alt="party icon" className={className} />
  );
};

export {
  MenuIcon,
  ServiceCartIcon,
  ServiceCartIconTwo,
  ServiceCartIconThree,
  ServiceCartIconFour,
};
