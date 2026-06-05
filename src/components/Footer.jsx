import { DevLogo, Logo } from "../assets/images";

const Footer = ({ t }) => {
  return (
    <footer>
      <div className="footer-holder">
        <Logo
          className="logo footer-logo"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-anchor-placement="top-bottom"
        />

        <div
          className="footer-width-holder"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="footer-text-holder">
            <p className="footer-text">{t.footer.text}</p>

            <div className="footer-links-holder">
              <ul className="footer-nav-holder">
                <li className="nav-item">
                  <a href="#hero">{t.footer.linkOne}</a>
                </li>
                <li className="nav-item">
                  <a href="#services">{t.footer.linkTwo}</a>
                </li>
                <li className="nav-item">
                  <a href="#why-us">{t.footer.linkThree}</a>
                </li>
                <li className="nav-item">
                  <a href="#testimonials">{t.footer.linkFour}</a>
                </li>
              </ul>

              <ul className="footer-nav-holder">
                <li className="nav-item">
                  <a href="#gallery">{t.footer.linkFive}</a>
                </li>
                <li className="nav-item">
                  <a href="#faq">{t.footer.linkSix}</a>
                </li>
                <li className="nav-item">
                  <a href="#contact">{t.footer.linkSeven}</a>
                </li>
              </ul>

              <div className="work-hours">
                <p>{t.footer.hours}</p>

                <p>
                  <span>{t.footer.dayOne}</span> -{" "}
                  <span>{t.footer.dayTwo}</span> : 09:00 - 17:00
                </p>

                <p>
                  <span>{t.footer.dayThree}</span> -{" "}
                  <span>{t.footer.dayFour}</span> : 07:00 - 22:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="copyright"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="800"
        data-aos-anchor-placement="top-bottom"
      >
        <span>{t.footer.copy}</span>

        <span>
          Developed by{" "}
          <a
            href="https://jovicweb.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DevLogo className="copy-logo" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
