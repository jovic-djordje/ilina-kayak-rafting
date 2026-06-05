import { GoArrowRight } from "react-icons/go";
import {
  ServiceCartIcon,
  ServiceCartIconFour,
  ServiceCartIconThree,
  ServiceCartIconTwo,
} from "../assets/icons/icon";

const ServiceSection = ({ t }) => {
  const carts = [
    {
      id: 1,
      title: t.service.cartOneTitle,
      text: t.service.cartOneText,
      btn: t.service.cartBtn,
      iconBtn: <GoArrowRight className="icon" />,
      icon: <ServiceCartIcon className="service-cart-icon" />,
    },
    {
      id: 2,
      title: t.service.cartTwoTitle,
      text: t.service.cartTwoText,
      btn: t.service.cartBtn,
      iconBtn: <GoArrowRight className="icon" />,
      icon: <ServiceCartIconTwo className="service-cart-icon" />,
    },
    {
      id: 3,
      title: t.service.cartThreeTitle,
      text: t.service.cartThreeText,
      btn: t.service.cartBtn,
      iconBtn: <GoArrowRight className="icon" />,
      icon: <ServiceCartIconThree className="service-cart-icon" />,
    },
    {
      id: 4,
      title: t.service.cartFourTitle,
      text: t.service.cartFourText,
      btn: t.service.cartBtn,
      iconBtn: <GoArrowRight className="icon" />,
      icon: <ServiceCartIconFour className="service-cart-icon" />,
    },
  ];

  return (
    <section className="service" id="services">
      <div className="service-section-holder">
        <div className="service-section-text-holder">
          <h2
            className="service-title"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            {t.service.title}
          </h2>

          <p
            className="service-text"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            {t.service.text}
          </p>
        </div>

        <div className="service-section-cart-holder">
          {carts.map((cart, index) => (
            <div
              className="service-cart"
              key={cart.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
            >
              <div className="service-cart-width">
                <div className="service-cart-icon-holder">{cart.icon}</div>
                <h3 className="service-cart-title">{cart.title}</h3>
                <p className="service-cart-text">{cart.text}</p>
                <a href="#contact" className="service-cart-btn">
                  <span className="service-cart-cta">{cart.btn}</span>
                  {cart.iconBtn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
