import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const ContactSection = ({ t }) => {
  return (
    <section className="contact" id="contact">
      <div className="contact-holder why-section-holder">
        <div className="contact-text-holder why-section-text-holder">
          <h2 className="contact-title why-title">{t.contact.title}</h2>
          <p className="contact-text why-text">{t.contact.text}</p>
        </div>

        <div className="contact-form-holder">
          <div className="form-holder">
            <form className="contact-form" method="post">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="firstName">{t.contact.firstName}</label>
                  <input type="text" id="firstName" name="first_name" />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="lastName">{t.contact.lastName}</label>
                  <input type="text" id="lastName" name="last_name" />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="phone">{t.contact.phone}</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">{t.contact.message}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.placeholder}
                />
              </div>

              <button className="hero-btn contact-btn" type="submit">
                <span className="hero-btn-text">{t.hero.btn}</span>
                <div className="btn-icon-holder">
                  <GoArrowUpRight className="btn-icon" />
                </div>
              </button>
            </form>

            <div className="contact-info">
              <div className="contact-info-top">
                <div className="contact-info-column">
                  <a
                    href="https://www.instagram.com/ilina_kajak_rafting/"
                    className="contact-info-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Instagram</span>
                    <GoArrowRight className="contact-info-icon" />
                  </a>
                  <a
                    href="https://www.youtube.com/@ilinakayakrafting"
                    className="contact-info-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>YouTube</span>
                    <GoArrowRight className="contact-info-icon" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@ilina_kayak_rafting_bl?"
                    className="contact-info-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>TikTok</span>
                    <GoArrowRight className="contact-info-icon" />
                  </a>
                </div>

                <div className="contact-info-column">
                  <a
                    href="https://wa.me/38766998674"
                    className="contact-info-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>WhatsApp</span>
                    <GoArrowRight className="contact-info-icon" />
                  </a>

                  <a
                    href="viber://chat?number=%2B38766998674"
                    className="contact-info-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Viber</span>
                    <GoArrowRight className="contact-info-icon" />
                  </a>
                </div>
              </div>

              <div className="contact-info-bottom">
                <a href="tel:+38766998674" className="contact-info-link">
                  <span>066 | 998-674</span>
                  <GoArrowRight className="contact-info-icon" />
                </a>

                <a
                  href="https://www.google.com/maps/place/Ilina+Kayak+Rafting/@44.7606257,17.1827942,620m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475e030037a6fe37:0xed7ffb31ec23dff!8m2!3d44.7606257!4d17.1827942!16s%2Fg%2F11z2y1jsnt?hl=en&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                  className="contact-info-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Q56M+779 Zeleni most, Branka Morače, Banja Luka 78000
                  </span>
                  <GoArrowRight className="contact-info-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-map-holder">
            <iframe
              width="100%"
              height="790"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija Ilina Kayak Rafting u Banjoj Luci"
              className="map"
              src={t.contact.map}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
