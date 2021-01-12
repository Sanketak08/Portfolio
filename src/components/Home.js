import React, { Fragment } from 'react';
import SVG from '../assets/img/Home-bg.svg';

const Home = () => {
    return (
        <Fragment className='home'>
            <div className='container'>
                <div className='row greeting '>
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
                                Full Stack Developer | React Native Enthusiast
                            </div>
                        </div>
                        {/* Social Media */}
                        <div className='text-center'>
                            <i className='social fa fa-linkedin-square'></i>
                            <i className='social fa fa-github-square'></i>
                            <i className='social fa fa-envelope-square'></i>
                        </div>
                        {/* Resume Button */}
                        <div className='resume d-flex justify-content-center mt-5'>
                            <button type='button' class='btn btn-primary'>
                                <i
                                    className='fa fa-file-text'
                                    aria-hidden='true'
                                ></i>{' '}
                                See My Resume
                            </button>
                        </div>
                    </div>
                    {/* Greetings SVG */}
                    <div className='greeting-svg col-12 col-md-6'>
                        <img
                            className='mr-6'
                            width='130%'
                            height='100%'
                            src={SVG}
                            alt='Svg'
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
