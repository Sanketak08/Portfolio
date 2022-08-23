import React, { Fragment, useEffect, useRef } from "react";
import ScrollTop from "./utils/ScrollTop";
import lottie from "lottie-web";

const Education = () => {
  const educationGIF = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: educationGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/Education.json"),
    });
  }, []);
  return (
    <Fragment>
      <ScrollTop />
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="ed-header row">
          <div className="col-12 col-md-6 order-12">
            <div className="educationGIF" ref={educationGIF}></div>
          </div>
          <div className="ed-align col-12 col-md-6 order-1">
            <div className="pr-heading h1 text-center">Education</div>
            <div className="lead mt-4 text-center">
              Basic Qualifications & Certifications
            </div>
          </div>
        </div>
        <div className="pr-body">
          {/* Qualifications */}
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="h1 text-center mt-5">
              Qualifications
            </div>
            {/* PICT */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="card edu-card mt-5">
              <div className="card-body">
                <div className="edu-info">
                  <h3 className="college">
                    Pune Institute of Computer Technology, Pune
                  </h3>
                  <div className="num-font-year">2019 - 2023</div>
                  <div className="mt-2 marks">
                    CGPA : <span className="num-font-marks">9.57</span>
                  </div>
                </div>
                <div className="qualification">BE</div>
              </div>
            </div>
            {/* HSC */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="card edu-card mt-5">
              <div className="card-body">
                <div className="edu-info">
                  <h3 className="college">Pemraj Sarda College, Ahmednagar</h3>
                  <div className="num-font-year">2018 - 2019</div>
                  <div className="mt-2 marks">
                    HSC : <span className="num-font-marks">78</span> %
                  </div>
                  <div className="mt-2 marks">
                    CET : <span className="num-font-marks">99.61</span> %ile
                  </div>
                </div>
                <div className="qualification">HSC</div>
              </div>
            </div>
            {/* SSC */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="card edu-card mt-5 mb-5">
              <div className="card-body">
                <div className="edu-info">
                  <h3 className="college">
                    Shevgaon English Medium School, Shevgaon
                  </h3>
                  <div className="num-font-year">2016 - 2017</div>
                  <div className="mt-2 marks">
                    SSC : <span className="num-font-marks">93</span> %
                  </div>
                </div>
                <div className="qualification">SSC</div>
              </div>
            </div>
          </div>
          {/* Certifications */}
          {/* <div className="mb-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="h1 text-center">
              Certifications
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Education;
