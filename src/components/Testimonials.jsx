import { Logo, TestFour, TestOne, TestThree, TestTwo } from "../assets/images";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useEffect, useRef, useState } from "react";

const Testimonials = ({ t }) => {
  const testimonials = [
    {
      id: 1,
      text: t.test.textOne,
      name: "Zoran Trifunovic",
      profile: <TestOne className="test-img" />,
    },
    {
      id: 2,
      text: t.test.textTwo,
      name: "Martina",
      profile: <TestTwo className="test-img" />,
    },
    {
      id: 3,
      text: t.test.textThree,
      name: "Mamabezfejsbuka",
      profile: <TestThree className="test-img" />,
    },
    {
      id: 4,
      text: t.test.textFour,
      name: "Isidora Ratkovic",
      profile: <TestFour className="test-img" />,
    },
  ];

  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const scrollToSlide = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.querySelector(".test-slide");
    if (!slide) return;

    const slideWidth = slide.offsetWidth;

    track.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  const prevTestimonial = () => {
    const newIndex = current === 0 ? testimonials.length - 1 : current - 1;
    setCurrent(newIndex);
    scrollToSlide(newIndex);
  };

  const nextTestimonial = () => {
    const newIndex = current === testimonials.length - 1 ? 0 : current + 1;
    setCurrent(newIndex);
    scrollToSlide(newIndex);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const slide = track.querySelector(".test-slide");
      if (!slide) return;

      const slideWidth = slide.offsetWidth;
      const currentIndex = Math.round(track.scrollLeft / slideWidth);
      setCurrent(currentIndex);
    };

    track.addEventListener("scroll", handleScroll);

    return () => {
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="test" id="test">
      <div className="test-holder">
        <Logo className="logo" />

        <div className="test-slider">
          <button
            className="test-arrow test-arrow-left"
            onClick={prevTestimonial}
          >
            <GoArrowLeft className="left-arrow-icon arrow-icon" />
          </button>

          <div className="test-content">
            <div className="test-track" ref={trackRef}>
              {testimonials.map((item) => (
                <div className="test-slide" key={item.id}>
                  <div className="test-text-holder">
                    <p className="test-text">“{item.text}”</p>
                  </div>

                  <div className="test-user">
                    <div className="test-avatar">{item.profile}</div>
                    <span className="test-name">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="test-dots">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  className={`test-dot ${index === current ? "active" : ""}`}
                  onClick={() => {
                    setCurrent(index);
                    scrollToSlide(index);
                  }}
                ></button>
              ))}
            </div>
          </div>

          <button
            className="test-arrow test-arrow-right"
            onClick={nextTestimonial}
          >
            <GoArrowRight className="right-arrow-icon arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
