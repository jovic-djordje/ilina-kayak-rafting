import { MenuIcon } from "../assets/icons/icon";
import { Logo } from "../assets/images";

const Navigation = () => {
  return (
    <header>
      <div className="header-holder">
        <MenuIcon className="menu-icon" />
        <Logo className="logo" />
        <div className="btn-holder">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="btn"></label>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
