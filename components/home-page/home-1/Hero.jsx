"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero1 = () => {
  const options = [
    { value: 0, display: "Alege tipul de asigurare.." },
    { value: 1, display: "Asigurare de viață" },
    { value: 2, display: "Asigurare de sănătate" },
    { value: 3, display: "Asigurare imobiliară" },
    { value: 4, display: "Asigurare auto" },
  ];
  const router = useRouter()
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/contact");
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-500 tx-dark">
              Siguranță pentru <span>tine</span> &amp; și viitorul tău
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Prețuri mici - Inimi mari
            </p>
            <form
              className="search-area d-md-inline-flex m-auto"
              onSubmit={handleSubmit}
            >
              <select className="nice-select form-select">
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.display}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="zip-code-input"
                placeholder="Cod poștal"
              />
              <button className="fw-500 text-white tran3s" type="submit">
                Caută
              </button>
            </form>
            {/* End form */}

            <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
                <img src="/images/icon/icon_99.svg" alt="" className="me-1" />
                <span>Companie de asigurări românească</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <Image
        width={487}
        height={649}
        src="/images/assets/ils_11.png"
        alt="ilustrație"
        className="lazy-img illustration-one"
        data-aos="fade-left"
      />
      <Image
        width={537}
        height={658}
        src="/images/assets/ils_12.png"
        alt="ilustrație"
        className="lazy-img illustration-two"
        data-aos="fade-right"
      />
    </div>
  );
};

export default Hero1;
