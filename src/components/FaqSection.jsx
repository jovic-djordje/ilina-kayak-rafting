import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const FaqSection = ({ t }) => {
  const faqs = [
    {
      id: 1,
      question: t.faq.qOne,
      answer: t.faq.aOne,
    },
    {
      id: 2,
      question: t.faq.qTwo,
      answer: t.faq.aTwo,
    },
    {
      id: 3,
      question: t.faq.qThree,
      answer: t.faq.aThree,
    },
    {
      id: 4,
      question: t.faq.qFour,
      answer: t.faq.aFour,
    },
    {
      id: 5,
      question: t.faq.qFive,
      answer: t.faq.aFive,
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq">
      <div className="faq-section-holder">
        <h2 className="faq-title">{t.faq.title}</h2>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div
              className={`faq-item ${openId === faq.id ? "faq-item--open" : ""}`}
              key={faq.id}
              onClick={() => toggle(faq.id)}
            >
              <div className="faq-item-header">
                <h3 className="faq-item-question">{faq.question}</h3>
                <div className="faq-item-icon-holder">
                  {openId === faq.id ? (
                    <LuMinus className="faq-icon" />
                  ) : (
                    <GoPlus className="faq-icon" />
                  )}
                </div>
              </div>

              <div className="faq-item-answer-wrap">
                <p className="faq-item-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
