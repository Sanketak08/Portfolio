import React, { Fragment, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import ScrollTop from './utils/ScrollTop';

const ContactMe = () => {
    const contactGIF = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: contactGIF.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/Contact.json'),
        });
    }, []);
    return (
        <Fragment>
            <ScrollTop />
            <div className='container'>
                <div
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    className='row ed-header'
                >
                    {/* Contact GIF */}
                    <div className='col-12 col-md-6 order-12'>
                        <div className='contactGIF' ref={contactGIF}></div>
                    </div>
                    {/* Contact Heading */}
                    <div className='col-12 col-md-6 ed-align order-1'>
                        <div className='pr-heading h1 text-center'>
                            Contact Me
                        </div>
                        <div className='justify-text-res lead mt-4 text-center'>
                            Feel free to contact me. I'm available on every
                            social media, I can help you with Web Development
                            and App Development.
                        </div>
                    </div>
                </div>
                <div>
                    {/* Get In Touch */}
                    <div
                        data-aos='fade-up'
                        data-aos-duration='1000'
                        className='font-med h1 text-center'
                    >
                        Get In Touch!
                    </div>
                    {/* Email */}
                    <div className='email-body mt-5'>
                        <div
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            className='email-heading d-flex justify-content-center align-items-center'
                        >
                            <span className='font-small h2 ml-3'>
                                <strong>Email</strong>
                            </span>
                        </div>
                        <div
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='300'
                            className=' d-flex justify-content-center align-items-center'
                        >
                            <i className='fa fa-envelope email-icon'></i>
                            <div className='ml-3 lead'>
                                sakulkarni0801@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className='social-media mt-5'>
                        <div
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            className='font-small h2 text-center'
                        >
                            <strong>Social Media</strong>
                        </div>
                        <div className='social-icons mt-3 d-flex justify-content-center'>
                            <a
                                data-aos='fade-right'
                                data-aos-duration='1000'
                                data-aos-delay='300'
                                href='http://www.github.com/Sanketak08'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fa fa-github git-icon mr-3'></i>
                            </a>
                            <a
                                data-aos='fade-right'
                                data-aos-duration='1000'
                                data-aos-delay='400'
                                href='http://www.linkedin.com/in/sanket-a-kulkarni'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fa fa-linkedin linkedin-icon mr-3'></i>
                            </a>
                            <a
                                data-aos='fade-right'
                                data-aos-duration='1000'
                                data-aos-delay='500'
                                href='https://www.instagram.com/sanketak_08'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fa fa-instagram instagram-icon'></i>
                            </a>
                        </div>
                    </div>
                    <div className='address-body mt-5'>
                        <div
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            className='font-small h2 text-center'
                        >
                            <strong>Address</strong>
                        </div>
                        <div
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='300'
                            className=' d-flex justify-content-center align-items-center'
                        >
                            <i className='fa fa-map-marker map-icon'></i>
                            <div className='ml-3 lead'>
                                A/P-Bhavinimgaon Tal-Shevgaon Dist-Ahmednagar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className='footer mt-5 pt-5 pb-3'>
                <div className='lead footer-text text-center'>
                    Made by Sanket Kulkarni
                </div>
            </div>
        </Fragment>
    );
};

export default ContactMe;
