const Block = () => {
  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <img
            src="/images/shape/shape_136.svg"
            alt="formă"
            className="lazy-img d-none d-sm-inline-block"
          />
        </div>
        <div className="col-md-7 col-sm-8" data-aos="fade-down">
          <div className="block-wrapper block-one">
            <h3 style={{ color: "#FFAE10" }}>500 +</h3>
            <p>Clienții au încredere în noi și au achiziționat asigurări.</p>
          </div>
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <div className="col-sm-7" data-aos="fade-down">
          <div className="block-wrapper block-two position-relative mt-50 sm-mt-30">
            <h3 style={{ color: "#9650EF" }}>
              50+ <br />
              <span>asigurări</span>
            </h3>
            <p>
              Colaborează cu noi pentru a compara ușor și transparent.
            </p>
            <img
              src="/images/shape/shape_138.svg"
              alt="formă"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.block-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-sm-5" data-aos="fade-up">
          <div className="block-wrapper block-three mt-50 sm-mt-30">
            <h3 style={{ color: "#00BDE6" }}>
              <span>Despăgubiri</span>
            </h3>
            <p>Primești suport de la experți cu ușurință.</p>
          </div>
          {/* /.block-wrapper */}
          <img
            src="/images/shape/shape_137.svg"
            alt="formă"
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
          />
        </div>
      </div>
    </>
  );
};

export default Block;
