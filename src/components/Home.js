import React, { Fragment, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeBio from '../assets/img/Home-bio.png';
import ScrollTop from './utils/ScrollTop';

const Home = () => {
    const homeGIF = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: homeGIF.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/HomePage.json'),
        });
        AOS.init();
    }, []);

    return (
        <Fragment>
            <ScrollTop />
            <div className='home'>
                <div className='container'>
                    {/* Main Home */}
                    <div
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        className='row greeting'
                    >
                        {/* Greetings Text */}
                        <div className='greeting-para col-12 col-md-6'>
                            <div className='greeting-text mt-6 mb-5'>
                                <div className='h3 greeting-text__hi'>
                                    Hi There!
                                </div>
                                <div className='h1 greeting-text__name'>
                                    I'm Sanket Kulkarni
                                </div>
                                <div className='greeting-text__bio text-center'>
                                    MERN Stack Developer | React Native
                                    Enthusiast
                                </div>
                            </div>
                            {/* Social Media */}
                            <div className='d-flex justify-content-center ml-4'>
                                <a
                                    href='http://www.linkedin.com/in/sanket-a-kulkarni'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <i className='social fa fa-linkedin-square'></i>
                                </a>
                                <a
                                    href='http://www.github.com/Sanketak08'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <i className='social fa fa-github-square'></i>
                                </a>
                                <a href='mailto:sakulkarni0801@gmail.com'>
                                    <i className='social fa fa-envelope-square'></i>
                                </a>
                            </div>
                            {/* Resume Button */}
                            <div className='d-flex justify-content-center mt-5'>
                                <a
                                    href='https://drive.google.com/file/d/1g-YNHMKSPFB1t4RjLWeHnHMuqHqAXUhs/view?usp=sharing'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button type='button' class='custom-btn'>
                                        <i className='fa fa-file' /> See My
                                        Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* Greetings SVG */}
                        <div className='col-12 col-md-6'>
                            <div className='homeGIF' ref={homeGIF}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                {/* Home Bio */}
                <div className='row mt-5'>
                    <div className='col-12 col-md-6'>
                        <div
                            data-aos='fade-up'
                            data-aos-duration='1000'
                            className='bio card  mb-5 p-3'
                        >
                            <p className='lead card-body'>
                                I'm MERN Stack Developer currently pursuing
                                Bachelor's Degree in Computer Engineering from
                                Pune Institute of Computer Technology. I'm
                                interested in developing Web as well as Android
                                Applications which could be helpful in solving
                                real-life problems and beneficial for the
                                mankind. My other interests include Gaming,
                                listening Music and watching Web Series.
                            </p>
                            <Link to='/about'>
                                <div class='lead btn1 from-left'>Read More</div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img
                            data-aos='fade-up'
                            data-aos-duration='1000'
                            className='mr-6'
                            width='130%'
                            height='100%'
                            src={HomeBio}
                            alt='Svg'
                        />
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className='footer mt-5 pt-5 pb-3'>
                <div className='lead footer-text text-center'>
                    Made with ❤️ by Sanket Kulkarni
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
