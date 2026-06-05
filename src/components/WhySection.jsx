import { Why, WhyMobile } from "../assets/images";

const WhySection = ({ t }) => {
  const carts = [
    {
      id: 1,
      num: "01",
      title: t.why.cartOneTitle,
      text: t.why.cartOneText,
    },
    {
      id: 2,
      num: "02",
      title: t.why.cartTwoTitle,
      text: t.why.cartTwoText,
    },
    {
      id: 3,
      num: "03",
      title: t.why.cartThreeTitle,
      text: t.why.cartThreeText,
    },
  ];

  return (
    <section className="why" id="why-us">
      <div className="why-section-holder">
        <div className="why-section-text-holder">
          <h2 className="why-title" data-aos="fade-up" data-aos-duration="700">
            {t.why.title}
          </h2>

          <p
            className="why-text"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            {t.why.text}
          </p>
        </div>

        <div className="why-section-cart-holder">
          {carts.map((cart, index) => (
            <div
              className="why-cart"
              key={cart.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
            >
              <div className="why-cart-width">
                <span className="why-num">{cart.num}</span>
                <div className="why-cart-text-holder">
                  <h3 className="why-cart-title">{cart.title}</h3>
                  <p className="why-cart-text">{cart.text}</p>
                </div>
              </div>
            </div>
          ))}

          <Why
            className="why-section-img"
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="900"
          />

          <WhyMobile
            className="why-section-img-mobile"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="900"
          />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
