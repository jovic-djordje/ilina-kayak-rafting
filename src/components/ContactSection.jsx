import { useState } from "react";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import supabase from "../library/supabase";

const ContactSection = ({ t }) => {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errorFields, setErrorFields] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;

    const sanitizedValue =
      name === "phone" ? value.replace(/[^0-9+\s-]/g, "") : value;

    setInput((prev) => ({ ...prev, [name]: sanitizedValue }));

    if (status.type === "error") {
      setErrorFields((prev) => prev.filter((f) => f !== name));
      setStatus({ type: "", message: "" });
    }
  };

  const validateForm = () => {
    const emptyFields = Object.entries(input)
      .filter(([, value]) => !value.trim())
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      setErrorFields(emptyFields);
      return "errorRequired";
    }

    if (!/\S+@\S+\.\S+/.test(input.email)) {
      setErrorFields(["email"]);
      return "errorEmail";
    }

    setErrorFields([]);
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const { error } = await supabase.from("contact_ilina").insert({
        first_name: input.first_name.trim(),
        last_name: input.last_name.trim(),
        email: input.email.trim(),
        phone: input.phone.trim(),
        message: input.message.trim(),
      });

      if (error) {
        setStatus({
          type: "error",
          message: "errorServer",
        });
        return;
      }

      setStatus({ type: "success", message: "success" });
      setInput({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrorFields([]);
      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 3000);
    } catch {
      setStatus({
        type: "error",
        message: "errorServer",
      });
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = (name) =>
    errorFields.includes(name) ? "input--error" : "";

  return (
    <section className="contact" id="contact">
      <div className="contact-holder why-section-holder">
        <div
          className="contact-text-holder why-section-text-holder"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h2 className="contact-title why-title">{t.contact.title}</h2>
          <p className="contact-text why-text">{t.contact.text}</p>
        </div>

        <div className="contact-form-holder">
          <div
            className="form-holder"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="firstName">{t.contact.firstName}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    value={input.first_name}
                    onChange={handleInput}
                    className={fieldClass("first_name")}
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="lastName">{t.contact.lastName}</label>
                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    value={input.last_name}
                    onChange={handleInput}
                    className={fieldClass("last_name")}
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={handleInput}
                    className={fieldClass("email")}
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="phone">{t.contact.phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={input.phone}
                    onChange={handleInput}
                    inputMode="tel"
                    pattern="[0-9+\s-]+"
                    className={fieldClass("phone")}
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <div className="message-label-row">
                  <label htmlFor="message">{t.contact.message}</label>
                  {status.message && (
                    <p className={`form-status form-status--${status.type}`}>
                      {t.contact[status.message]}
                    </p>
                  )}
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.placeholder}
                  value={input.message}
                  onChange={handleInput}
                  className={fieldClass("message")}
                />
              </div>

              <button
                className="hero-btn contact-btn"
                type="submit"
                disabled={loading}
              >
                <span className="hero-btn-text">
                  {loading ? t.contact.sending : t.hero.btn}
                </span>
                <div className="btn-icon-holder">
                  <GoArrowUpRight className="btn-icon" />
                </div>
              </button>
            </form>

            <div
              className="contact-info"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
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
                    href="https://www.tiktok.com/@ilina_kayak_rafting_bl"
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

          <div
            className="contact-map-holder"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="900"
          >
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
