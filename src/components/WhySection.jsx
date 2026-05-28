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
    <section className="why">
      <div className="why-section-holder">
        <div className="why-section-text-holder">
          <h2 className="why-title">{t.why.title}</h2>
          <p className="why-text">{t.why.text}</p>
        </div>
        <div className="why-section-cart-holder">
          {carts.map((cart) => (
            <div className="why-cart" key={cart.id}>
              <div className="why-cart-width">
                <span className="why-num">{cart.num}</span>
                <div className="why-cart-text-holder">
                  <h3 className="why-cart-title">{cart.title}</h3>
                  <p className="why-cart-text">{cart.text}</p>
                </div>
              </div>
            </div>
          ))}
          <Why className="why-section-img" />
          <WhyMobile className="why-section-img-mobile" />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
