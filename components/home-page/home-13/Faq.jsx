const Faq = () => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "Ce tipuri de asigurări oferiți?",
      answer:
        "Oferim o gamă variată de asigurări: RCA, CASCO, asigurări de locuință, de viață, de călătorie, medicale private și pentru afaceri. Te ajutăm să alegi pachetul potrivit nevoilor tale.",
    },
    {
      id: "faq-2",
      question: "Cum pot încheia o asigurare prin agenția voastră?",
      answer:
        "Poți încheia o asigurare online, telefonic sau direct în agenție. Procesul este simplu și rapid, iar un consultant îți va oferi suportul necesar pas cu pas.",
    },
    {
      id: "faq-3",
      question: "Ce documente sunt necesare pentru o asigurare auto?",
      answer:
        "Pentru o asigurare auto ai nevoie de: copie după cartea de identitate, certificatul de înmatriculare al mașinii și, în unele cazuri, istoricul daunelor.",
    },
    {
      id: "faq-4",
      question: "Cât durează emiterea unei polițe?",
      answer:
        "Emiterea unei polițe durează, în general, câteva minute, dacă documentele sunt complete. Pentru anumite tipuri de asigurări, poate dura până la 24 de ore.",
    },
    {
      id: "faq-5",
      question: "Ce trebuie să fac în caz de daună?",
      answer:
        "Contactează-ne imediat sau anunță asiguratorul la numărul de urgență specificat în poliță. Te vom ghida în toți pașii necesari pentru deschiderea dosarului de daună.",
    },
  ];

  return (
    <div className="accordion accordion-style-four" id="accordionOne">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
