import React, { Fragment, useEffect, useRef } from "react";
import lottie from "lottie-web";
import DevConnector from "../assets/img/DevConnector.png";
import ReactNativeLibrary from "../assets/img/ReactNativeLibrary.png";
import Ideathon from "../assets/img/Ideathon.png";
import Istriwala from "../assets/img/Istriwala.jpg";
import ScrollTop from "./utils/ScrollTop";

const Projects = () => {
  const projectGIF = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: projectGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/Project.json"),
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
            <div className="projectGIF" ref={projectGIF}></div>
          </div>
          <div className="align col-12 col-md-6 order-1">
            <div className="pr-heading h1 text-center">Projects</div>
            <div className="justify-text-res lead mt-4 text-center">
              My projects make best use of new technologies and are based on
              real-world scenarios. I've made use of different technologies for
              different projects.
            </div>
          </div>
        </div>
        {/* DevConnector */}
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              data-aos="flip-left"
              data-aos-duration="1000"
              src={DevConnector}
              alt="DevConnector"
              className="pr-image"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="col-12 col-md-6">
            <div>
              <p className="h1 title">DevConnector</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                This is the Web-App for the Developers. One can build his
                profile and add posts, comments and hit like.
              </p>
            </div>
            <div className="icons">
              <div
                className="iconify"
                data-icon="vscode-icons:file-type-reactjs"></div>
              <div class="iconify" data-icon="logos:redux"></div>
              <div className="iconify" data-icon="logos:nodejs-icon"></div>
              <div className="iconify mongo" data-icon="cib:mongodb"></div>
            </div>
            <div className="mt-8">
              <a
                href="https://devconnectornew08.herokuapp.com/"
                target="_blank"
                rel="noreferrer">
                <button type="button" className="pr-btn">
                  Link
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Istriwala */}
        <div className="row mt-6">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="col-12 col-md-6 order-12">
            <div>
              <p className="h1 title">Istriwala</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                This is mobile application made for laundry owners. The app
                features basic necessities like creating an order, filtering the
                orders over a range of days and many more
              </p>
            </div>
            <div className="icons">
              <div
                className="iconify"
                data-icon="vscode-icons:file-type-reactts"></div>
              <div class="iconify" data-icon="logos:redux"></div>
              <div className="iconify" data-icon="logos:javascript"></div>
              <div class="iconify" data-icon="logos:firebase"></div>
            </div>
            <div className="mt-8">
              <a
                href="https://github.com/5iveD3velopers/EstreewalaApp"
                target="_blank"
                rel="noreferrer">
                <button type="button" className="pr-btn">
                  Link
                </button>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 d-flex align-items-center justify-content-center">
            <img
              data-aos="flip-right"
              data-aos-duration="1000"
              src={Istriwala}
              alt="Istriwala"
              className="pr-image-istri"
            />
          </div>
        </div>
        {/* React Native Library */}
        <div className="row mt-6">
          <div className="col-12 col-md-6">
            <img
              data-aos="flip-left"
              data-aos-duration="1000"
              src={ReactNativeLibrary}
              alt="React Native Library"
              className="pr-image"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="col-12 col-md-6">
            <div>
              <p className="h1 title">React Native Library</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                This is an Open-Source Project to make the open source library
                for React Native, in which I've implemented various ready to use
                components for developers
              </p>
            </div>
            <div className="icons">
              <div
                className="iconify"
                data-icon="vscode-icons:file-type-reactts"></div>
              <div className="iconify" data-icon="logos:typescript-icon"></div>
            </div>
            <div className="mt-8">
              <a
                href="https://github.com/react-dev-community/utility-components"
                target="_blank"
                rel="noreferrer">
                <button type="button" className="pr-btn">
                  Link
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Ideathon */}
        <div className="row mt-6">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="col-12 col-md-6 order-12">
            <div>
              <p className="h1 title">Ideathon</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                Created website for IDEATHON'20 - the Hackathon conducted by
                PISB
              </p>
            </div>
            <div className="icons">
              <div
                className="iconify"
                data-icon="vscode-icons:file-type-html"></div>
              <div
                className="iconify"
                data-icon="vscode-icons:file-type-css"></div>
              <div className="iconify" data-icon="logos:bootstrap"></div>
            </div>
            <div className="mt-8">
              <a
                href="https://hackathon-20-pisb.netlify.app/"
                target="_blank"
                rel="noreferrer">
                <button type="button" className="pr-btn">
                  Link
                </button>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 justify-image">
            <img
              data-aos="flip-right"
              data-aos-duration="1000"
              src={Ideathon}
              alt="Ideathon"
              className="pr-image"
            />
          </div>
        </div>
      </div>
      {/* More Projects */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="d-flex justify-content-center mt-6 mb-6">
        <a
          href="https://github.com/Sanketak08"
          target="_blank"
          rel="noreferrer">
          <button type="button" class="mt-res-2 custom-btn">
            More Projects
          </button>
        </a>
      </div>
    </Fragment>
  );
};

export default Projects;
