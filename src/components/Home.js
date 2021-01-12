import React, { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <div className='container'>
                {/* Greetings Text */}
                <div className='col-6'>
                    <div className='greeting-text mt-6'>
                        <div className='h3'>Hi There</div>
                        <div className='h1'>I'm Sanket Kulkarni</div>
                    </div>
                    <div className='social'>
                        <i className='fa fa-linkedin'></i>
                        <i className='fa fa-github'></i>
                        <i className='fa fa-envelope'></i>
                    </div>
                    <div className='resume'>
                        <div class='container1'>
                            <a href='www' class='btn mt-6'>
                                <svg width='277' height='62'>
                                    <defs>
                                        <linearGradient id='grad1'>
                                            <stop
                                                offset='0%'
                                                stop-color='#001c55'
                                            />
                                            <stop
                                                offset='0%'
                                                stop-color='#001c55'
                                            />
                                        </linearGradient>
                                    </defs>
                                    <rect
                                        x='5'
                                        y='5'
                                        rx='12'
                                        fill='none'
                                        stroke='url(#grad1)'
                                        width='266'
                                        height='50'
                                    ></rect>
                                </svg>
                                gdhguidh
                            </a>
                        </div>
                    </div>
                </div>
                {/* Greetings SVG */}
                <div className='col-6'></div>
            </div>
        </Fragment>
    );
};

export default Home;
