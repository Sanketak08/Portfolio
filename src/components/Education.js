import React, { Fragment, useEffect, useRef } from 'react';
import ScrollTop from './utils/ScrollTop';
import lottie from 'lottie-web';

const Education = () => {
    const projectGIF = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: projectGIF.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/img/Education.json'),
        });
    }, []);
    return (
        <Fragment>
            <ScrollTop />
            <div className='container'>
                <div className='pr-header row'>
                    <div className='col-12 col-md-6'>
                        <div className='projectGIF' ref={projectGIF}></div>
                    </div>
                    <div className='col-12 col-md-6 ed-align'>
                        <div className='pr-heading h1 text-center'>
                            Education
                        </div>
                    </div>
                </div>
                <div className='pr-body'>
                    {/* Certifications */}
                    <div className='h1 text-center'>Certifications</div>
                    <div>
                        <a
                            href='https://www.hackerrank.com/sakulkarni0801'
                            target='_blank'
                            rel='noreferrer'
                            className='mt-4 cp-handle d-flex justify-content-center'
                        >
                            <div
                                class='iconify hackerrank'
                                data-icon='la:hackerrank'
                            ></div>
                        </a>
                    </div>
                    {/* Qualifications */}
                    <div className='h1 text-center mt-6'>Qualifications</div>
                    {/* PICT */}
                    <div className='card edu-card mt-5'>
                        <div className='card-body'>
                            <div className='edu-info'>
                                <h3 className='college'>
                                    Pune Institute of Computer Technology, Pune
                                </h3>
                                <div className='num-font-year'>2019 - 2023</div>
                                <div className='mt-2 marks'>
                                    FE(SPPU) :{' '}
                                    <span className='num-font-marks'>9.27</span>{' '}
                                    CGPA
                                </div>
                            </div>
                            <div className='qualification'>BE</div>
                        </div>
                    </div>
                    {/* HSC */}
                    <div className='card edu-card mt-5'>
                        <div className='card-body'>
                            <div className='edu-info'>
                                <h3 className='college'>
                                    Pemraj Sarda College, Ahmednagar
                                </h3>
                                <div className='num-font-year'>2018 - 2019</div>
                                <div className='mt-2 marks'>
                                    HSC :{' '}
                                    <span className='num-font-marks'>78</span> %
                                </div>
                                <div className='mt-2 marks'>
                                    CET :{' '}
                                    <span className='num-font-marks'>
                                        99.61
                                    </span>{' '}
                                    %ile
                                </div>
                            </div>
                            <div className='qualification'>HSC</div>
                        </div>
                    </div>
                    {/* SSC */}
                    <div className='card edu-card mt-5'>
                        <div className='card-body'>
                            <div className='edu-info'>
                                <h3 className='college'>
                                    Shevgaon English Medium School, Shevgaon
                                </h3>
                                <div className='num-font-year'>2016 - 2017</div>
                                <div className='mt-2 marks'>
                                    SSC :{' '}
                                    <span className='num-font-marks'>93</span> %
                                </div>
                            </div>
                            <div className='qualification'>SSC</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer mt-5 pt-5 pb-3'>
                <div className='lead footer-text text-center'>
                    Made with ❤️ by Sanket Kulkarni
                </div>
            </div>
        </Fragment>
    );
};

export default Education;
