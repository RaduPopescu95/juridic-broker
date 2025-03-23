import React from "react";

import DefaulHeader from "@/components/header/DefaulHeader";
import Testimonial from "@/components/home-page/home-13/Testimonial";
import Faq from "@/components/home-page/home-13/Faq";
import Link from "next/link";
import FooterContent from "@/components/home-page/home-13/FooterContent";
import Subscribe from "@/components/home-page/home-13/Subscribe";
import CopyrightFooter from "@/components/home-page/home-13/CopyrightFooter";
import Image from "next/image";
import OurMission from "@/components/about/OurMission";
import Block2 from "@/components/about/Block2";
import CounterSection from "@/components/home-page/home-13/Counter";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "About Us V4 || Juridic - Broker",
};
const AboutUsV4 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      {/* 
        =============================================
        Feature Section Fifty Eight
        ============================================== 
        */}
      <div className="fancy-feature-fiftyEight position-relative zn2 pt-180 md-pt-150">
        <div className="container position-relative">
          <div className="row">
            <div className="col-xl-9 col-lg-7 col-md-8 m-auto">
              <div
                className="title-style-fourteen text-center mb-100 lg-mb-70"
                data-aos="fade-up"
              >
                <div className="sc-title">Despre noi</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                Cunoaște-ne mai bine și descoperă  {" "}
                  <span className="position-relative">
                  valorile noastre{" "}
                    <Image
                      width={302}
                      height={9}
                      src="/images/shape/shape_186.svg"
                      alt="shape"
                    />
                  </span>
                </h2>
              </div>
              {/* /.title-style-fourteen */}
            </div>
          </div>
          <OurMission />
          {/* End .row */}

          <Image
            width={449}
            height={808}
            src="/images/shape/shape_187.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
        </div>
      </div>
      {/* /.fancy-feature-fiftyEight */}
      {/*
        =====================================================
        Feature Section Fifty Nine
        =====================================================
        */}
      <div
        className="fancy-feature-fiftyNine position-relative mt-140 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">
            <h2 className="main-title font-recoleta fw-normal tx-dark">
            Despre noi{" "}
              {/* <span className="position-relative">
              Juridic. The People.
                <Image
                  width={235}
                  height={9}
                  src="/images/shape/shape_188.svg"
                  alt="shape"
                />
              </span> */}
            </h2>
          </div>
          {/* End title */}
          <div className="row">
            <div className="col-xl-9 m-auto">
              <p
                className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20"
                data-aos="fade-up"
              >
                Cu o experiență de peste 15 ani în domeniu și o acoperire națională formată dintr-o rețea de peste 100 de colaboratori, putem spune mândri că rezultatele ne recomandă, fiind multiplii câștigători ai premiilor de performanță oferite de revistele de specialitate în domeniu sau de către asiguratori, atat la nivel de broker cat și la nivel județean prin intermediul francizelor noastre.
              </p>
            </div>
          </div>
          {/* End .row */}
          {/* <div className="card-wrapper pt-45 lg-pt-20 pb-55 lg-pb-30 mt-85 lg-mt-50">
            <div className="row justify-content-center">
              <Block2 />
            </div>
          </div>{" "} */}
          {/* /.card-wrapper */}
        </div>{" "}
        {/* /.container */}
        {/* <div className="wrapper mt-50 lg-mt-10">
          <div className="container">
            <div className="row">
              <CounterSection />
            </div>
          </div>
        </div>{" "} */}
        {/* /.wrapper */}
        {/* <Image
          width={130}
          height={108}
          src="/images/shape/shape_189.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        /> */}
      </div>
      {/* /.fancy-feature-fiftyNine */}
      {/* 
        =============================================
        Feedback Section Ten
        ============================================== 
        */}
      {/* <div
        className="feedback-section-ten position-relative zn2 pt-110 pb-150 mt-160 lg-mt-100 lg-pt-80 lg-pb-80"
        style={{ background: "#fafafa" }}
      >
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-ten text-center text-lg-start"
                  aos="fade-right"
                >
                  <div className="sc-title">FEEDBACK</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
                    What
                    <span className="position-relative">
                      {" "}
                      client{" "}
                      <Image
                        width={100}
                        height={4}
                        src="/images/shape/shape_129.svg"
                        alt=""
                      />
                    </span>
                    think about us.
                  </h2>
                </div>
             
              </div>
            </div>
     
            <Testimonial />
          </div>
        </div>


        <Image
          width={129}
          height={147}
          src="/images/shape/shape_130.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <Image
          width={170}
          height={150}
          src="/images/shape/shape_131.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div> */}
      {/* /.feedback-section-ten */}
      {/* 
        =============================================
        Feature Section Thirty Three
        ============================================== 
        */}
      <div className="fancy-feature-thirtyThree mt-70 lg-mt-70">
        <div className="container">
          <div className="title-style-ten text-center" aos="fade-up">
            <div className="sc-title">FAQ</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Întrebări &amp;{" "}
              <span className="position-relative">
                răspunsuri{" "}
                <Image
                  width={219}
                  height={7}
                  src="/images/shape/shape_132.svg"
                  alt=""
                />
              </span>
            </h2>
          </div>
          {/* /.title-style-ten */}

          <div
            className="bg-wrapper position-relative mt-80 lg-mt-40"
            aos="fade-up"
          >
            <Faq />
            <Image
              width={65}
              height={66}
              src="/images/shape/shape_133.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-feature-thirtyThree */}

      {/*
        =====================================================
        Fancy Short Banner Twelve
        =====================================================
        */}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Ai alte întrebări? <br />
                  <span className="position-relative">
                    Hai să vorbim{" "}
                    {/* <Image
                      width={221}
                      height={7}
                      src="/images/shape/shape_132.svg"
                      alt=""
                    /> */}
                  </span>
                  {/* &amp; Grow your Business */}
                </h2>
              </div>
              {/* /.title-style-ten */}
              {/* <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                aos="fade-up"
                aos-delay="200"
              >
                We’r ready to help you. Our expert is here, just send a message.
              </p> */}
              <Link
                href="/contact"
                className="btn-twenty fw-500 tran3s"
                aos-delay="300"
                aos="fade-up"
              >
                Trimite mesaj
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="shapes shape-one" /> */}
      </div>
      {/* /.fancy-short-banner-twelve */}
      {/*
        =====================================================
        Footer
        =====================================================
        */}
     <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/logo_02.png" alt="logo" width={95} />
                  </Link>
                </div>
                {/* <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  Best Asigurari Company.
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
                  Juridic inc.
                </p> */}
              </div>
              <Footer />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        <img
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
      {/* /.footer-style-nine */}
    </>
  );
};

export default AboutUsV4;
