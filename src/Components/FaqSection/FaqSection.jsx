import { useState } from "react";
import "./FaqSection.css";

const faqs = [
  {
    question: "¿Dónde se encuentra Tierra de Mestizos?",
    answer:
      "El alojamiento se encuentra en Villa La Angostura, en una zona tranquila y muy bien ubicada, con fácil acceso a los principales puntos turísticos."
  },
  {
    question: "¿Con que equipamientos cuenta el alojamiento?",
    answer:
      "Cuentan con vajilla, utensillos, tostadora, pava electrica, microondas, cafetera y heladera/frigobar."
  },
  {
    question: "¿Se puede consultar disponibilidad por WhatsApp?",
    answer:
      "Sí, podés consultarnos directamente por WhatsApp desde el botón de contacto y te respondemos a la brevedad."
  },
  {
    question: "¿Hay estacionamiento disponible?",
    answer:
      "Sí, el alojamiento cuenta con espacio para estacionar."
  },
  {
    question: "¿A qué hora es el check-in y check-out?",
    answer:
      "El check-in es a las 14hs y el check-out a las  11hs."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2>Preguntas frecuentes</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <button className="faq-question" onClick={() => toggle(index)}>
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}