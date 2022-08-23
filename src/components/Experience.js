import lottie from "lottie-web";
import React, { Fragment, useEffect, useRef } from "react";
import ScrollTop from "./utils/ScrollTop";
import TraceLinkLogo from "../assets/img/tracelink.jpg";
import DwebboxLogo from "../assets/img/dwebbox.png";
import ShoesonlooseLogo from "../assets/img/shoesonloose.jpg";
import PISBLogo from "../assets/img/pisb.jpg";

const Experience = () => {
  const experienceGIF = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: experienceGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/Experience.json"),
    });
  }, []);
  return (
    <Fragment>
      <ScrollTop />
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="row pr-header">
          <div className="col-12 col-md-6 order-12">
            <div className="projectGIF" ref={experienceGIF}></div>
          </div>
          <div className="align col-12 col-md-6 order-1">
            <div className="pr-heading h1 text-center">Experience</div>
            <div className="justify-text-res lead mt-4 text-center">
              I've worked with startups as Full Stack Developer Intern. I've
              also worked with well established companies as a Software Engineer
              Intern.
            </div>
          </div>
        </div>
        <div className="pr-body">
          {/* Internships */}
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="h1 text-center mt-5 mb-5">
              Internships
            </div>
            {/* TraceLink */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="row mb-5 d-flex flex-row justify-content-center align-items-center">
              <div className="logoContainer">
                <img src={TraceLinkLogo} alt="TraceLink" className="logo" />
              </div>
              <div className="contentContainer">
                <div className="card edu-card">
                  <div className="card-body">
                    <div className="edu-info">
                      <div className="top-info d-flex flex-row justify-content-between">
                        <h3 className="mb-0 college">
                          Software Engineer Intern
                        </h3>
                        <div className="tenure">Jun 2022 - Jul 2022</div>
                      </div>
                      <div className="top-info d-flex flex-row justify-content-between">
                        <div className="comp-name">TraceLink Inc.</div>
                        <div className="tenure">Pune</div>
                      </div>
                      <div className="mt-3 marks text-justify">
                        I've created mockup service which provides an easy way
                        for the developers to test the different endpoints. I've
                        created this using{" "}
                        <span style={{ fontStyle: "italic" }}>
                          NodeJS & ExpressJS
                        </span>
                        . I've also handled custom error scenarios and worked on
                        handling configuration properties.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Dwebbox */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="row mb-5 d-flex flex-row justify-content-center align-items-center">
              <div className="logoContainer">
                <img src={DwebboxLogo} alt="Dwebbox" className="logo" />
              </div>
              <div className="contentContainer">
                <div className="card edu-card">
                  <div className="card-body">
                    <div className="edu-info">
                      <div className="top-info d-flex flex-row justify-content-between">
                        <h3 className="mb-0 college">
                          Full Stack Developer Intern
                        </h3>
                        <div className="tenure">Aug 2021 - Feb 2022</div>
                      </div>
                      <div className="top-info d-flex flex-row justify-content-between">
                        <div className="comp-name">D-WebBox</div>
                        <div className="tenure">Remote</div>
                      </div>
                      <div className="mt-3 marks text-justify">
                        I've worked on the ecosystems which consists of the web
                        as well as android applications. I've worked on
                        integrating & creating APIs, handled databases. I've
                        worked with technoliogies like{" "}
                        <span style={{ fontStyle: "italic" }}>
                          ReactJS, React Native, Firebase
                        </span>
                        .
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ShoesOnLoose */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="row mb-6 d-flex flex-row justify-content-center align-items-center">
              <div className="logoContainer">
                <img
                  src={ShoesonlooseLogo}
                  alt="Shoes on Loose"
                  className="logo"
                />
              </div>
              <div className="contentContainer">
                <div className="card edu-card">
                  <div className="card-body">
                    <div className="edu-info">
                      <div className="top-info d-flex flex-row justify-content-between">
                        <h3 className="mb-0 college">
                          Frontend Developer Intern
                        </h3>
                        <div className="tenure">April 2021 - May 2021</div>
                      </div>
                      <div className="top-info d-flex flex-row justify-content-between">
                        <div className="comp-name">
                          Shoes on Loose Pvt. Ltd.
                        </div>
                        <div className="tenure">Remote</div>
                      </div>
                      <div className="mt-3 marks text-justify">
                        I worked on the project based on supply-chain
                        management. I've integrated varios APIs in this project
                        and developed few components. I've also contributed in
                        code refactoring. Technology tools used were{" "}
                        <span style={{ fontStyle: "italic" }}>
                          React, Redux, Material UI
                        </span>
                        .
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Volunteer */}
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="h1 text-center mb-5">
              Volunteer
            </div>
            {/* PISB */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="row mb-6 d-flex flex-row justify-content-center align-items-center">
              <div className="logoContainer">
                <img src={PISBLogo} alt="PISB" className="logo" />
              </div>
              <div className="contentContainer">
                <div className="card edu-card">
                  <div className="card-body">
                    <div className="edu-info">
                      <div className="top-info d-flex flex-row justify-content-between">
                        <h3 className="mb-0 college">Technical Head</h3>
                        <div className="tenure">Sep 2021 - Present</div>
                      </div>
                      <div className="top-info d-flex flex-row justify-content-between">
                        <div className="comp-name">
                          PICT IEEE Student Branch
                        </div>
                      </div>
                      <div className="mt-3 marks text-justify">
                        I've contributed in creating official website of PISB.
                        I've contributed in organizing the annual tech fest of
                        the club & also developed websites for individual
                        events.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
